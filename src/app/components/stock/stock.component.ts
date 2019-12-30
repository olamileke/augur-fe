import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  @Input() stock;
  
  constructor() { }

  ngOnInit() {
  }

}
