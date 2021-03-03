const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
  name:{
      type:String,
  },
  phonenumber:{
      type:String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  store: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store'
}],
});



module.exports = mongoose.model('Phone', PhoneSchema);