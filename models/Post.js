const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	animal: {
		type: String,
		//required: true
	},
	bride: {
		type: String
    },
    age: {
		type: String
    },
    
    pregnentTimes: {
		type: String
	},
	milkPerDay: {
		type: String
	},
	milkcapacity: {
		type: String
	},
    price: {
		type: String
	},
	whatTimePregnant: {
		type: String
	},
	isPregnent: {
		type: String
	},
	whatChild: {
		type: String
	},
	addInfo: {
		type: String
	},
	photo: [{
        type: String,
        default:'no photo'
	}],
	date: {
		type: Date,
		default: Date.now
	},
	postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Phone'
    },
});

module.exports = mongoose.model('Post', postSchema);
