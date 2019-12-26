import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadService } from  '../services/load.service';

@Injectable()
export class LoadInterceptor implements HttpInterceptor {

	constructor(private load:LoadService) {}

	intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {

		this.load.show()
		return next.handle(req).pipe(finalize(() => this.load.hide()))
	}
}