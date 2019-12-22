import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Output() changeTab=new EventEmitter();
  @Input() activeTab;

  constructor() { }

  ngOnInit() {
  }


  emitChange(changeType:string) {

  	this.changeTab.emit(changeType);
  }

}
