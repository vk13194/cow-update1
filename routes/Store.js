const express = require('express');
const router = express.Router();
const Store = require('../models/Store')
const auth = require('../middleware/auth')
const Phone = require('../models/Phone')
const geocoder = require('../utils/geocoder')
router.get('/store', async(req, res, next)=>{
    try {
    const store = await Store.find()
    res.json(store)
    } catch (err) {
        res.json('server error')
    }

})

/*router.post('/store',auth, async(req, res)=>{
    try {
        const store = await Store.create(req.body)
        const user = await Phone.findById(req.phone.id);
        await user.store.push(store.id)
        console.log("user",user)
       await user.save()
        console.log(store)
        res.json(store)
    } catch (err) {
        console.log(err)
        res.json('server error')
    }
})*/
/* else { 
       const newStore= await Store.findByIdAndUpdate(user.store[0], location,{
            new:true,
            runValidators:true
        })
       }*/
//console.log('auth-token',auth)

router.post('/store', auth, async(req, res)=>{
    try {
        const loc = await geocoder.geocode(req.body.address);
      var location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        city: loc[0].city,
        country: loc[0].country,
        state: loc[0].state,
        county: loc[0].county
      };
       const store = new Store({
        location
       })
       
       const user = await Phone.findById(req.phone.id);
       const userlength= user.store.length
       if(userlength === 0){
        await user.store.push(store.id)
       await user.save()
       await store.save()
       }else { 
        console.log('testStore', store.location)
        var mylocation =store.location
        const newStore= await Store.findByIdAndUpdate(user.store[0], {location:mylocation},{
             new:true,
             runValidators:true
         })
         console.log('newStore',newStore)
        }
        res.json(store)
    } catch (err) {
        console.log(err)
        res.json('server error')
    }
})
router.get('/data', auth, async(req, res)=>{
    try {
     const phone = await Phone.findById(req.phone.id).populate('store')
    
       var mylog = phone.store[0].location.coordinates
       console.log(mylog)
        const options ={
            location:{
                $geoWithin:{
                    $centerSphere:[ mylog, 25/3963.2]
                }
            }
           
        }
        const store = await Store.find(options).populate({path:'post',model:'Post',
        populate:{
         path: 'postedBy',
         model: 'Phone'
        }
     })
        res.json(store)
    } catch (err) {
        console.log(err)
        res.json('server error')
    }
})
module.exports= router