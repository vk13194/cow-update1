const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/users', async(req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json({success:true,count:user.length, 
            data:user})
    } catch (err) {
        console.error(err.message);
		res.status(500).send('Server Error');
    }
})

router.post('/create',async (req, res) => {
		
		const { name, phone, pincode } = req.body;

		try {
			const newUser = new User({
				name,
				phone,
				pincode,
			});

			const user = await newUser.save();

			res.json(user);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);
// @access   Private
router.delete('/:id', async (req, res) => {
	try {
		const contact = await User.findById(req.params.id);
		await User.findByIdAndRemove(req.params.id);
		res.json({ msg: 'Contact removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});
router.put('/:id', async(req, res)=>{
    try {
        const user = 
        await User.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        })
        
        res.status(200).json({success:true, data:user})
    } catch (err) {
        console.error(err.message);
		res.status(500).send('Server error');
    }
})
router.get('/:id', async(req,res)=>{
    try {
     const user = await User.findById(req.params.id)
    res.status(200).json({success:true, data:user})
    } catch (err) {
        console.error(err.message);
		res.status(500).send('Server error');
    }
})
module.exports= router;
