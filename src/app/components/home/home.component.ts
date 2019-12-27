import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  tabs={base:true, auth:false};
  auth:string;
  classes:any;
 
  ngOnInit() {

      this.setClasses();
  }


  setClasses() {

      this.classes={responsive_base_theme:this.switchTheme(this.tabs.base), 
              responsive_auth_theme:this.switchTheme(this.tabs.auth)};
  }


  checkScreenSize():boolean {

      if(screen.width <= 768) {

          return true;
      }

      return false;
  }


  switchTheme(param:boolean):boolean {

      if(this.checkScreenSize() && param) {

          return true;
      }

      return false;
  }


  setActiveTab(tab:string) {

    if(tab == 'signup' || tab == 'login') {

      this.auth=tab;
      tab = 'auth';
    }


  	let tabKeys=Object.keys(this.tabs);

  	for(let i=0; i < tabKeys.length ; i++) {

  		this.tabs[tabKeys[i]]=false;
  	}

  	this.tabs[tab]=true;
    this.setClasses();
  }

}
