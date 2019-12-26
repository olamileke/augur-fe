import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { NotificationService } from '../services/notification.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private auth:AuthService, private notification:NotificationService) { }

  canActivate():boolean {

  	  if(!this.auth.isAuthenticated()) {
  	  	
  	  	  this.router.navigate(['/']);
  	  	  this.notification.showErrorMsg('You are not logged in');
  	  	  return false;
  	  }

  	  return true;
  }
}
