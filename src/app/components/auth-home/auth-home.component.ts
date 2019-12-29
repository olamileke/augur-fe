import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent implements OnInit {

  tabs = {explore:true, followed_stocks:false, predictions:false};

  constructor() { }

  ngOnInit() {
  }

}
