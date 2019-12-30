import { Component, OnInit, Input } from '@angular/core';

import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  @Input() symbol;
  constructor(private stocks:StocksService) { }

  ngOnInit() {

  	this.stocks.view(this.symbol).subscribe((res:any) => {

  		console.log(res);
  	})
  }

}
