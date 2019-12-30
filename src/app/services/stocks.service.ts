import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http:HttpClient) { }


  explore():Observable<any> {

  	const URL=environment.api_url + 'explore';
  	return this.http.get(URL);
  }


  view(symbol:string):Observable<any> {

  	const URL=environment.api_url + `stock/view/${symbol}`;
  	return this.http.get(URL);
  }
}
