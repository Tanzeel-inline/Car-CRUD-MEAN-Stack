const Vehicle = require('../Models/Vehicle');


exports.vehicle_add = async (req, res) => {
	try {
		
		console.log("Vehicle add request received");
		console.log(req.body.vehicle);
		const vehicleTitle = req.body.vehicle.VehicleTitle;
		const vehicleType = req.body.vehicle.VehicleType;
		const vehicleModel = req.body.vehicle.VehicleModel;
		const vehicleNumber = req.body.vehicle.VehicleNumber;
		const vehicleColor = req.body.vehicle.VehicleColor;
		const vehiclePrice = req.body.vehicle.VehiclePrice;
		const registeredCity = req.body.vehicle.registeredCity;
		const engineCapacity = req.body.vehicle.engineCapacity;
		const Mileage = req.body.vehicle.Mileage;
		const Rating = req.body.vehicle.Rating;
		const sellerName = req.body.vehicle.sellerName;
		const sellerPhone = req.body.vehicle.sellerPhone;
		const sellerEmail = req.body.vehicle.sellerEmail;
		const sellerAddress = req.body.vehicle.sellerAddress;
		const sellerComment = req.body.vehicle.sellerComment;

		//Current data when data is added
		const date = new Date();

		//Validate the data (optional) if enough time

		//Create a new vehicle
		const vehicle = new Vehicle({
			VehicleTitle: vehicleTitle,
			VehicleType: vehicleType,
			VehicleModel: vehicleModel,
			VehicleNumber: vehicleNumber,
			VehicleColor: vehicleColor,
			VehiclePrice: vehiclePrice,
			addedDate: date,
			registeredCity: registeredCity,
			engineCapacity: engineCapacity,
			Mileage: Mileage,
			Rating: Rating,
			sellerName: sellerName,
			sellerPhone: sellerPhone,
			sellerEmail: sellerEmail,
			sellerAddress: sellerAddress,
			sellerComment: sellerComment
		});

		console.log(vehicle);

		//Save the vehicle
		await vehicle.save( (err) => {
			if(err) {
				console.log(err);
				res.status(500).send({
					success: false,
					message: 'Error saving vehicle'
				});
			}
			else {
				console.log('Vehicle added successfully');
				res.status(200).json({
					success: true,
					message: 'Vehicle added successfully'
				});
			}
		});
		
	}
	catch(err) {
		console.log(err);
		console.log("Failed to add car");
	}
};

exports.vehicle_delete = async (req, res) => {
	try {
		console.log("Vehicle delete request received");
		//console.log(req.body);
		const vehicleNumber = req.body.vehicleNum;
		console.log(vehicleNumber);
		let veh = await Vehicle.findOne({VehicleNumber: vehicleNumber});
		if ( !veh ) {
			res.status(404).json({
				success: false,
				message: 'Vehicle not found'
			});
		}
		else {
			Vehicle.deleteOne({VehicleNumber: vehicleNumber}, (err) => {
				if(err) {
					console.log(err);
					res.status(500).json({
						success: false,
						message: 'Error deleting vehicle'
					});
				}
				else {
					console.log('Vehicle deleted successfully');
					res.status(200).json({
						success: true,
						message: 'Vehicle deleted successfully'
					});
				}
			});
		}
	}
	catch(err) {
		console.log(err);
		console.log("Failed to delete car");
	}
};

exports.vehicle_get_all = async (req, res) => {
	try {
		console.log("Vehicle get all request received");
		
		let vehicles = await Vehicle.find({}).select({ _id: 0 });
		if ( !vehicles ) {
			res.status(404).json({
				//success: false,
				message: 'No vehicles found'
			});
		}
		else {
			res.status(200).json({
				//success: true,
				//message: 'Vehicles found',
				vehicles: vehicles
			});
		}
	}
	catch(err) {
		console.log(err);
		console.log("Failed to get all cars");
	}
};

exports.vehicle_update_data = async (req, res) => {
	try {
		console.log("Vehicle update request received with data");
		console.log(req.body.vehicle);
		const vehicleTitle = req.body.vehicle.VehicleTitle;
		const vehicleType = req.body.vehicle.VehicleType;
		const vehicleModel = req.body.vehicle.VehicleModel;
		const vehicleNumber = req.body.vehicle.VehicleNumber;
		const vehicleColor = req.body.vehicle.VehicleColor;
		const vehiclePrice = req.body.vehicle.VehiclePrice;
		const registeredCity = req.body.vehicle.registeredCity;
		const engineCapacity = req.body.vehicle.engineCapacity;
		const Mileage = req.body.vehicle.Mileage;
		const Rating = req.body.vehicle.Rating;
		const sellerName = req.body.vehicle.sellerName;
		const sellerPhone = req.body.vehicle.sellerPhone;
		const sellerEmail = req.body.vehicle.sellerEmail;
		const sellerAddress = req.body.vehicle.sellerAddress;
		const sellerComment = req.body.vehicle.sellerComment;

		//Current data when data is added
		const date = new Date();

		//Validate the data (optional) if enough time

		//Create a new vehicle
		const vehicle = new Vehicle({
			VehicleTitle: vehicleTitle,
			VehicleType: vehicleType,
			VehicleModel: vehicleModel,
			VehicleNumber: vehicleNumber,
			VehicleColor: vehicleColor,
			VehiclePrice: vehiclePrice,
			addedDate: date,
			registeredCity: registeredCity,
			engineCapacity: engineCapacity,
			Mileage: Mileage,
			Rating: Rating,
			sellerName: sellerName,
			sellerPhone: sellerPhone,
			sellerEmail: sellerEmail,
			sellerAddress: sellerAddress,
			sellerComment: sellerComment
		});

		console.log(vehicle);

		let veh = await Vehicle.updateOne({VehicleNumber: vehicleNumber},  { $set: { VehicleTitle: vehicleTitle, VehicleType: vehicleType, VehicleModel: vehicleModel, VehicleColor: vehicleColor, VehiclePrice: vehiclePrice, registeredCity: registeredCity, engineCapacity: engineCapacity, Mileage: Mileage, Rating: Rating, sellerName: sellerName, sellerPhone: sellerPhone, sellerEmail: sellerEmail, sellerAddress: sellerAddress, sellerComment: sellerComment } });
		if ( !veh ) {
			res.status(404).json({
				success: false,
				message: 'Vehicle not updated'
			});
		}
		else {
			res.status(200).json({
				success: true,
				message: 'Vehicle updated successfully'
			});
		}
	}
	catch(err) {
		console.log(err);
		console.log("Failed to update car");
	}
}
exports.vehicle_update = async (req, res) => {
	try {
		console.log("Vehicle update request received");
		console.log(req.body);
		const vehicleNumber = req.body.vehicleNum;

		
		let veh = await Vehicle.findOne({VehicleNumber: vehicleNumber}).select({ _id: 0, __v: 0 });
		if ( !veh ) {
			res.status(404).json({
				success: false,
				message: 'Vehicle not found',
				vehicle: veh
			});
		}
		else {
			res.status(200).json({
				success: true,
				message: 'Vehicle data retrieved',
				vehicle: veh
			});
		}
	}
	catch(err) {
		console.log(err);
		console.log("Failed to update car");
	}
};