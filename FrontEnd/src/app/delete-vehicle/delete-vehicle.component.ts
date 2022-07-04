import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent implements OnInit {

	constructor( private http: HttpClient) { }

	ngOnInit(): void {

	}

	vehicleNum(num: string) {
		console.log(num);
		this.deleteVehiclerequest(num);
	}

	deleteVehiclerequest(num: string) {
		this.http.post('http://localhost:3000/deleteVehicle', {
			vehicleNum: num
			}).subscribe(data => {
				console.log(data);
				Object.keys(data).forEach((key)=>{
					console.log(key + ": " + data[key]);
					if ( key == "success" ) {
						if ( data[key] == true ) {
							alert("Vehicle deleted successfully");
						}
						else {
							alert("Vehicle not found");
						}
					}
				});
			});
	}
}
