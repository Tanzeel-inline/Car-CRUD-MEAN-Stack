import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/Vehicle';
import { faChevronUp, faChevronDown, faIcons } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-vehicle-item',
  templateUrl: './show-vehicle-item.component.html',
  styleUrls: ['./show-vehicle-item.component.css']
})
export class ShowVehicleItemComponent implements OnInit {

	@Input() task: Vehicle
	image: String = 'assets/vrk.png';
	faChevron = faChevronDown;
	faIcon: boolean = false;
	wrapperClass: string = "wrapper";
	constructor() { 
		
	}

	ngOnInit(): void {
		
	}

	onDetails(task) {
		if ( this.faIcon == false ) {
			this.faIcon = true;
			this.faChevron = faChevronUp;
			this.wrapperClass = "wrapperExtended";
		}
		else {
			this.faIcon = false;
			this.faChevron = faChevronDown;
			this.wrapperClass = "wrapper";
		}
		console.log(task);
	}
}
