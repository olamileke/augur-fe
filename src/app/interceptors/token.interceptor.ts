import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';


@Injectable({providedIn:'root'})
export class TokenInterceptor implements HttpInterceptor {

	constructor(private auth:AuthService) {}

	intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

		if(this.auth.isAuthenticated()) {

			let token = JSON.parse(localStorage.augur_user).api_token;
			const req_clone = req.clone({url:req.url + `?api_token=${token}`});
			return next.handle(req_clone);
		}

		return next.handle(req);
	}
}