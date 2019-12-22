import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  tabs={base:false, signup:true, login:false};
  activeTab='signup';

  ngOnInit() {
  }


  setActiveTab(tab:string) {

  	let tabKeys=Object.keys(this.tabs);

  	for(let i=0; i < tabKeys.length ; i++) {

  		this.tabs[tabKeys[i]]=false;
  	}

  	this.tabs[tab]=true;
    this.activeTab=tab;
  }

}
