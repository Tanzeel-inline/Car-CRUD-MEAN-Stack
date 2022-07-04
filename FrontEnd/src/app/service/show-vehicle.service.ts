import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Vehicle } from '../Vehicle';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

// Set the http options
const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root'
})

export class ShowVehicleService {
	url = "http://localhost:3000/getVehicles";
	constructor(private httpClient: HttpClient) { }

	/**
   * Function to extract the data when the server return some
   *
   * @param res
   */
	private extractData(res: Response) {
		let body = res;
		let body1 = body || {};
		return body1;
	}

	/**
	 * Function to GET what you want
	 *
	 * @param url
	 */
	public getVehicles(url: string): Observable<any> {

	// Call the http GET
	return this.httpClient.get(url, httpOptions).pipe(
	map(this.extractData)
	);
	}
}
