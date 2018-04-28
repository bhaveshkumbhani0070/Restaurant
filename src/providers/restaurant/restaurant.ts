import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { SERVER_NAME } from '../server';


@Injectable()
export class RestaurantProvider {
  token:string;
  headers = new HttpHeaders();
  constructor(public http: HttpClient) {
    console.log('Hello RestaurantProvider Provider');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  //4.RESTAURANT CUSTOMERS 
  getCustomer():Observable<{}> {
    return this.http.get(SERVER_NAME+ '/customer/get?id='+localStorage.getItem('cust_id')).pipe(
      map(this.extractData)
    );
  }
  updateCustomer(data){
    return this.http.post(SERVER_NAME+ '/customer/update/',  
    { 
      "cust_id":localStorage.getItem('cust_id'),
      "name":data.name,
      "email":data.email,
      "phone":data.phone,
      "address":data.address, 
      "photo":data.photo,
      "username":data.username
    }
    ).pipe(
      map(this.extractData),
   //   catchError(this.handleError)
    );
  }
  // 10.BULK BOOKINGS
  bookTable(data){
    console.log('data',data);
    return this.http.post(SERVER_NAME+ '/booking/add/',  
    { 
      "rest_id":"5adc14ce4e45b846a9fd34f0", 
      "cust_id":localStorage.getItem('cust_id'),
      "date":data.date,
      "time":data.time,
      "people":data.seats,
      "comments":data.requirement, 
      "status":"confirmed"
    }
    ).pipe(
      map(this.extractData),
   //   catchError(this.handleError)
    );
  }
  
  getBooking(): Observable<{}> {
    return this.http.get(SERVER_NAME+ '/booking/get?cust_id='+localStorage.getItem('cust_id')).pipe(
      map(this.extractData),
  //    catchError(this.handleError)
    );
  }

  // 4.RESTAURANT CUSTOMERS 
  addCustomer(data){
    this.token = localStorage.getItem('token');
    return this.http.post(SERVER_NAME+ '/customer/add',  
    { 
      "rest_id":localStorage.getItem('rest_id'), 
      "name":data.name,
      "email":data.email,
      "phone":data.phone, 
      "address":data.address,
      "photo":data.photo,
      "username":data.username,
      "password":data.password
    },{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    }
    ).pipe(
      map(this.extractData),
   //   catchError(this.handleError)
    );
  }
  // 9. OFFER DETAILS
  getOffer(): Observable<{}> {
    return this.http.get(SERVER_NAME+ '/offer/get?rest_id='+localStorage.getItem('rest_id')).pipe(
      map(this.extractData),
  //    catchError(this.handleError)
    );
  }
  
  // 12.RESTAURANT EVENTS
  getEvents(): Observable<{}> {
    return this.http.get(SERVER_NAME+ '/event/get?rest_id='+localStorage.getItem('rest_id')).pipe(
      map(this.extractData),
  //    catchError(this.handleError)
    );
  }
  // 13.CUSTOMER REVIEWS
  getReviews(): Observable<{}> {
    return this.http.get(SERVER_NAME+ '/review/get?cust_id='+localStorage.getItem('cust_id')).pipe(
      map(this.extractData),
  //    catchError(this.handleError)
    );
  }
}
