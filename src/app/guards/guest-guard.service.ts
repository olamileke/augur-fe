import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';


@Injectable({providedIn:'root'})
export class GuestGuard implements CanActivate{

	constructor(private auth:AuthService, private notification:NotificationService,
				private router:Router) {}

	canActivate():boolean {

		if(this.auth.isAuthenticated()) {

			this.router.navigate(['/dashboard']);
			this.notification.showInfoMsg('You are currently logged in');
			return false;
		}	

		return true;
	}
}