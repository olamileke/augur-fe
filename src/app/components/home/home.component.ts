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

  ngOnInit() {
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
  }

}
