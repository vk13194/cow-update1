const express = require('express');
const router =express.Router();
const Post = require('../models/post')
//const auth = require('../middleware/auth')
const User = require('../models/User')
const fileupload = require('express-fileupload');

router.get('/posts',  async (req, res) => {
	try {
    const posts = await Post.find()

		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});


router.post('/createpost',async (req,res)=>{
    const {animal,bride,age,milkPerDay,pregnent,birthTime,
        pregnentTime,
        price,
    } = req.body;
    let file = req.files.photo
        var path="/public/"+file.name
        file.mv("./public/"+file.name)
        const url = req.protocol + '://' + req.get('host');
   
    try {
      const newPost = new Post({
        animal,
        bride,
        age,
        milkPerDay,
        pregnent,
        birthTime,
        price,
        pregnentTime,
        photo:url+"/public/"+file.name,
        //postedBy:req.user.id
    })
    const post = await newPost.save();
    res.json(post);
    } catch (err) {
      console.log(err)
      res.status(500).send('Server Error');
    }
})
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
/*router.put('/like/:id',  async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (post.likes.some(like => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.put('/unlike/:id',auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has not yet been liked
    if (!post.likes.some(like => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // remove the like
    post.likes = post.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await post.save();

    return res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});*/
module.exports= router;
