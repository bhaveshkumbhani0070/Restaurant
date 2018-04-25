import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { SERVER_NAME } from '../server';


@Injectable()
export class RestaurantProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestaurantProvider Provider');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  // 10.BULK BOOKINGS
  bookTable(data){
    console.log('data',data);
    return this.http.post(SERVER_NAME+ '/booking/add/',  
    { 
      "rest_id":"5adc14ce4e45b846a9fd34f0", 
      "cust_id":"5adffaf80b468b5a8381e2b3",
      "date":data.date,
      "time":data.time,
      "people":data.seats,
      "comments":data.requirement, 
      "status":"requested"
    }
    ).pipe(
      map(this.extractData),
   //   catchError(this.handleError)
    );
  }
  
 

  getBooking(): Observable<{}> {
    return this.http.get(SERVER_NAME+ '/booking/get?cust_id=5adffaf80b468b5a8381e2b3').pipe(
      map(this.extractData),
  //    catchError(this.handleError)
    );
  }
}
