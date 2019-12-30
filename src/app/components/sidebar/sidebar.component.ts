import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() changeTab = new EventEmitter();
  tabs = {explore:true, followed_stocks:false, predictions:false};

  constructor(private router:Router, private notification:NotificationService) { }

  ngOnInit() {
  }


  emitChange(tab:string):void {

      this.setActiveTab(tab);
      this.changeTab.emit(tab);
  }


  setActiveTab(tab:string) {

      let tabKeys = Object.keys(this.tabs);

     for(let i = 0; i < tabKeys.length; i++) {

         this.tabs[tabKeys[i]] = false;
     }

     this.tabs[tab] = true;
  }


  logout() {

  	localStorage.removeItem('augur_user');
  	this.router.navigate(['/']);
  	this.notification.showSuccessMsg('Logout successful!');
  }

}
