const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const multer = require('multer')
const auth = require('../middleware/auth')
const Phone = require('../models/Phone')
const Store = require('../models/Store')
const DIR = './uploads/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})

//get allposts
router.get('/posts', async(req, res)=>{
    try {
        const posts = await Post.find().populate('postedBy');
        res.json(posts)
    } catch (err) {
        console.error(err.message);
       res.status(500).send('Server Error');
    }
    })
// create post
router.post('/createpost',upload.array('photo',4),async(req, res, next)=>{
      
const {
    animal,bride,age,pregnentTimes,milkPerDay,milkcapacity,price,whatTimePregnant,
        isPregnent,whatChild,addInfo}=req.body
        const url = req.protocol + '://' + req.get('host');
    let alllength =req.files.length
    const newp=req.files
      let allphoto=[]
    for(let i=0; i<alllength;i++)
    {
     allphoto.push(url + '/uploads/' + req.files[i].filename,)

    }
 console.log(allphoto)
    try {
        const newPost = new Post({
        animal,
        bride,
        age,
        pregnentTimes,
        milkPerDay,
        milkcapacity,
        price,
        whatTimePregnant,
        isPregnent,
        whatChild,
        addInfo,
        photo:allphoto

        })
        const post = await newPost.save();
        res.json(post);

    } catch (err) {
    console.log(err)
      res.status(500).send('Server Error');
    }
    
})
//post by id
router.post('/createpost1',upload.array('photo',4),auth,async(req, res, next)=>{
      
    const {
        animal,bride,age,pregnentTimes,milkPerDay,milkcapacity,price,whatTimePregnant,
            isPregnent,whatChild,addInfo}=req.body
            const url = req.protocol + '://' + req.get('host');
        let alllength =req.files.length
        const newp=req.files
          let allphoto=[]
        for(let i=0; i<alllength;i++)
        {
         allphoto.push(url + '/uploads/' + req.files[i].filename,)
    
        }
     console.log(allphoto)
        try {
            const newPost = new Post({
            animal,
            bride,
            age,
            pregnentTimes,
            milkPerDay,
            milkcapacity,
            price,
            whatTimePregnant,
            isPregnent,
            whatChild,
            addInfo,
            photo:allphoto,
            postedBy:req.phone.id
            })
            const post = await newPost.save();
           // console.log('post', post.id)
            const myPhone=await Phone.findById(req.phone.id)
            console.log('mypost', myPhone.store)
            const myStore = await Store.findById(myPhone.store)
            await myStore.post.push(post.id)
            await myStore.save()
            console.log('myStore', myStore)
            res.json(post);
    
        } catch (err) {
        console.log(err)
          res.status(500).send('Server Error');
        }
        
    })
//edit post
router.put('/:id', async(req, res)=>{
    try {
        const post = 
        await Post.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        })
        
        res.status(200).json({success:true, data:post})
    } catch (err) {
        console.error(err.message);
		res.status(500).send('Server error');
    }
})
//delete post
router.delete('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		await Post.findByIdAndRemove(req.params.id);
		res.json({ msg: 'Contact removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});
module.exports = router;