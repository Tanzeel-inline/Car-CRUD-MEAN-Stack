import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {Vehicle} from '../Vehicle'
import {ShowVehicleService} from '../service/show-vehicle.service'

@Component({
  selector: 'app-show-vehicle',
  templateUrl: './show-vehicle.component.html',
  styleUrls: ['./show-vehicle.component.css']
})
export class ShowVehicleComponent implements OnInit {
	tasks: Vehicle[] = [];
	private apiUrl = 'http://localhost:3000/getVehicles';
	constructor(private http: HttpClient, private showVehicleService: ShowVehicleService) {  
		
	}

	ngOnInit(): void {
		// this.http.get<Vehicle[]>(this.apiUrl).subscribe((res)=>{
		// 	this.tasks = res;
		// 	console.log(JSON.stringify(res));
		//   });
		// console.log(this.tasks);
		this.showVehicleService.getVehicles(this.apiUrl).subscribe( data => {
			
			Object.keys(data).forEach((key)=>{ 
				Object.keys(data[key]).forEach((key1)=>{
					//console.log(key1 + ": " + data[key][key1].VehicleTitle);
					this.tasks.push(data[key][key1]);
				});
			});
			// console.log(this.tasks);
			// for ( let i = 0; i < this.tasks.length; i++ ) {
			// 	console.log(this.tasks[i]);
			// }
		});
	}

}

interface VehicleData {
    vehicles: Vehicle[];
}
