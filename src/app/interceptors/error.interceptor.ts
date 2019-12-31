import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor(private notification:NotificationService, private router:Router) {}

	intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {	

		return next.handle(req).pipe(catchError((error:any) => this.handleError(error)))
	}


	handleError(error:any) {

		console.log(error);

		if(error.error.url == '/signup' && error.status == 403) {

			this.notification.showErrorMsg('An account exists for that email address');
		}

		if(error.error.url == '/login' && error.status == 404) {

			this.notification.showErrorMsg('Invalid username or password');
		}


		if(error.error.url == '/auth' && error.status == 404) {

			this.notification.showErrorMsg('Invalid Token');
			localStorage.removeItem('augur_user');
			this.router.navigate(['/']);
		}

		return of(error);
	}
}