import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  signup(data:any):Observable<any> {

  	const url=environment.api_url+'signup';
  	return this.http.post(url, data, this.httpOptions);
  }


  login(data:any): Observable<any> {

  	const url=environment.api_url+'login';
  	return this.http.post(url, data, this.httpOptions);	
  }


  get httpOptions() {

  	return {headers:new HttpHeaders({'Content-Type':'application/json'})};
  }


  isAuthenticated():boolean {

      if(localStorage.augur_user != undefined && JSON.parse(localStorage.augur_user).hasOwnProperty('api_token')) {

          return true;
      }
      else {

          return false;
      }
  }
}
