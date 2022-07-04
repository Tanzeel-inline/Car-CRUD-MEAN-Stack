const mongoose = require('mongoose');

var connected = false;

const db = async() => {
	if ( !connected ) {
		try {
			await mongoose.connect("mongodb://localhost:27017/assg4", { useNewUrlParser: true, useUnifiedTopology: true }).then(res=> {
				console.log("Connected to DB");
				connected = true;
			});
		} catch(error) {
			console.log(error);
		}
	}
};

module.exports = db;


