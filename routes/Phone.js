const express = require('express')
const router = express.Router();
const Phone = require('../models/Phone')
let serviceID="VAfcc416d0f24f15ebef78a3820b8bfdac"
let accountSID="ACb45fdda79ef3c6ff6f1f8a10bfa0ba92"
let authToken="cbc58198371d1544087640aef8ffe6a9"
const client = require('twilio')(accountSID,authToken)
const jwt = require('jsonwebtoken')
const auth= require('../middleware/auth')
const jwtSecret ="jwtSecret"


router.post('/login', async(req,res)=>{
    try {
        if (req.body.phonenumber){
          const data= await client
            .verify
            .services(serviceID)
            .verifications
            .create({
                to: req.body.phonenumber,
                channel:'sms' 
            })
            //console.log(data)
            const {phonenumber, name} = req.body
        const phone = await Phone.findOne({phonenumber})
        if(phone){
            res.status(200).json({phone} ) 
        }else {
        const phone = new Phone({
           phonenumber,
           name 
        })
       await phone.save()
        res.status(200).json({
            phone
        })
    }
    }
    } catch (err) {
        console.log(err)
        res.json('server error')
    }
       
    })
    router.get('/verify', (req, res) => {
        if (req.query.phonenumber && (req.query.code).length === 6) {
            client
                .verify
                .services(serviceID)
                .verificationChecks
                .create({
                    to: `+${req.query.phonenumber}`,
                    code: req.query.code
                })
                .then(data => {
                    if (data.status === "approved") {
                        res.status(200).send({
                            message: "User is Verified!!",
                            data
                        })
                    }
                })
        } else {
            res.status(400).send({
                message: "Wrong phone number or code :(",
                phonenumber: req.query.phonenumber,
                data
            })
        }
    })

    router.post('/verify', async(req, res) => {
        try {
        if (req.body.phonenumber ) {
           const data= await client
                .verify
                .services(serviceID)
                .verificationChecks
                .create({
                    to: req.body.phonenumber,
                    code: req.body.code
                })
                /*.then(data => {
                    if (data.status === "approved") {
                        res.status(200).send({
                            message: "User is Verified!!",
                            data
                        })
                    }
                })*/
                console.log(data)
                const {phonenumber} = req.body
               if(data.status=== "approved"){
                   const phone = await Phone.findOne({phonenumber})
                   const payload ={
                       phone:{
                           id:phone.id
                       }
                   }
                   jwt.sign(payload, jwtSecret,
               { expiresIn:360000 },(err, token)=>{
               if(err) throw err;
               //console.log(token)
                res.json({token,
                    phone
                })
     }) 
               }
               
            
        } 
    } catch (err) {
         console.log(err) 
         res.json('server err')  
    }
    })
     
    router.get('/', auth, async (req, res) => {
        try {
            const user = await Phone.findById(req.phone.id).populate('store');
            res.json(user);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });
module.exports= router;