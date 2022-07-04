const mongoose = require('mongoose');

const schema = mongoose.Schema;

const VehicleSchema = new schema({
	VehicleID: schema.Types.ObjectId,
	VehicleTitle: {
		type: String,
		required: true
	},
	VehicleType: {
		type: String,
		required: true
	},
	VehicleModel: {
		type: String,
		required: true
	},
	VehicleNumber: {
		type: String,
		required: true,
		unique: true
	},
	VehicleColor: {
		type: String,
		required: true
	},
	VehiclePrice: {
		type: Number,
		required: true
	},
	addedDate: {
		type: Date,
		required: true
	},
	registeredCity: String,
	engineCapacity: {
		type: Number,
		required: true
	},
	Mileage: Number,
	Rating: {
		type: Number,
		default: 5,
		min: 1,
		max: 5
	},
	sellerName: String,
	sellerPhone: {
		type: Number,
		required: true
	},
	sellerEmail: String,
	sellerAddress: String,
	sellerComment: String
	
});

module.exports = mongoose.model('Vehicle', VehicleSchema);


