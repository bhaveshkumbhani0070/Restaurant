import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { SERVER_NAME } from '../server';


@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
  }

  login(username: string, password: string): Observable<{}> {
    console.log('username',username,' password',password)
    return this.http.post(SERVER_NAME+ '/login/',  { username: username, password: password }).pipe(
      map(this.extractData),
   //   catchError(this.handleError)
    );
  }

  isAuthenticated(){
    if (localStorage.getItem('token')) {
      // logged in so return true
      return true;
    }
    return false;
  }

  
  private extractData(res: any) {
    console.log('res',res);
    let body = res.data;
    if (body) {
      localStorage.setItem('token', res.token);
      localStorage.setItem('cust_id',res.data.cust_id);
    }
    return body || { };
  }
  
  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return error;
  // }

  // login(username: string, password: string) {
  //   return this.http.post<any>('/api/authenticate', { username: username, password: password })
  //       .map(user => {
  //           // login successful if there's a jwt token in the response
  //           if (user && user.token) {
  //               // store user details and jwt token in local storage to keep user logged in between page refreshes
  //               localStorage.setItem('currentUser', JSON.stringify(user));
  //           }

  //           return user;
  //       });
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }

}
