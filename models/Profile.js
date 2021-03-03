const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
   text:{
       type:String
   },
   phone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Phone'
},
address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store'
},
    date:{
        type:Date,
        default:Date.now
    },
    
});

module.exports = mongoose.model('Profile', ProfileSchema);
