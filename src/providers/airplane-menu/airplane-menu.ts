import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { SERVER_NAME } from '../server';

@Injectable()
export class AirplaneMenuProvider {


  constructor(public http: HttpClient) {}


  getAirplaneMenu(): Observable<{}> {
    return this.http.get(SERVER_NAME+ 'airplanemenu/').pipe(
      map(this.extractData),
  //    catchError(this.handleError)
    );
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  

}
