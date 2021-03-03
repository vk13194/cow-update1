const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const StoreSchema = new mongoose.Schema({
  address: {
    type: String,
   // required: [true, 'Please add an address']
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    //formattedAddress: String
    country:String,
    city:String,
    state:String,
    county:String
  },
  post:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});
/*
// Geocode & create location
StoreSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.address);
  console.log(loc)
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    city: loc[0].city,
    country: loc[0].country,
    state: loc[0].state,
    county: loc[0].county
  };

  // Do not save address
  this.address = undefined;
  next();
});
*/
module.exports = mongoose.model('Store', StoreSchema);