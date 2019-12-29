import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router, private notification:NotificationService) { }

  ngOnInit() {
  }


  logout() {

  	localStorage.removeItem('augur_user');
  	this.router.navigate(['/']);
  	this.notification.showSuccessMsg('Logout successful!');
  }

}
