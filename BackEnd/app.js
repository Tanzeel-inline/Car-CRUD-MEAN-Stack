
const express = require('express');
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser');

const db = require('./db/db')
//const Vehicle = require('./Models/Vehicle');
const appController = require('./controller/appController');

db();

//APIs to use
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Post and get requests

//Adds the vehicle to database
app.post('/addVehicle', appController.vehicle_add);

//Delete the vehicle from database
app.post('/deleteVehicle', appController.vehicle_delete);

//Retrieve the vehicle from database with database
app.get('/getVehicles', appController.vehicle_get_all);

//Update the Vehicle details but get the vehicle number first
app.post('/updateVehicle', appController.vehicle_update);

//Update the vehicle data
app.post('/updateVehicleData', appController.vehicle_update_data);

//Starting server
app.listen(3000,console.log(`Listening on port 3000`));

