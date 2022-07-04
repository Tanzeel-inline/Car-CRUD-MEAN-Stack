import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../Vehicle';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

	constructor(private http: HttpClient) { }
	vehicle: Vehicle = { VehicleTitle: '', VehicleType: '', VehicleModel: '', VehicleNumber: '', VehicleColor: '', VehiclePrice: 0 ,  addedDate: new Date(), registeredCity: '', engineCapacity: 0, Mileage: 0, Rating: 0, sellerName: '', sellerPhone: 0, sellerEmail: '', sellerAddress: '', sellerComment: '' };

	ngOnInit(): void {
		
	}


	getVehicleData(title: string, type: string, model: string, number: string, color: string, price: string, registeredCity: string, engineCapacity: string, mileage: string, rating: string, sellerName: string, sellerPhone: string, sellerEmail: string, sellerAddress: string, sellerComments: string) {
		this.vehicle.VehicleTitle = title;
		this.vehicle.VehicleType = type;
		this.vehicle.VehicleModel = model;
		this.vehicle.VehicleNumber = number;
		this.vehicle.VehicleColor = color;
		this.vehicle.VehiclePrice = parseInt(price) ;
		this.vehicle.registeredCity = registeredCity;
		this.vehicle.engineCapacity = parseInt(engineCapacity);
		this.vehicle.Mileage = parseInt(mileage);
		this.vehicle.Rating = parseInt(rating);
		this.vehicle.sellerName = sellerName;
		this.vehicle.sellerPhone = parseInt(sellerPhone);
		this.vehicle.sellerEmail = sellerEmail;
		this.vehicle.sellerAddress = sellerAddress;
		this.vehicle.sellerComment = sellerComments;

		this.http.post('http://localhost:3000/addVehicle', {
		vehicle: this.vehicle
		}).subscribe(data => {
			console.log(data);
			Object.keys(data).forEach((key)=>{
				console.log(key + ": " + data[key]);
				if ( key == "success" ) {
					if ( data[key] == true ) {
						alert("Vehicle create successfully");
					}
					else {
						alert("Error occured");
					}
				}
			});
		});
	}
}
