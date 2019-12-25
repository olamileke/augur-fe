import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() authType;

  constructor() { }

  ngOnInit() {
  }

}
