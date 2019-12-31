import { Component, OnInit, Input } from '@angular/core';

import { StocksService } from '../../services/stocks.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  @Input() stock_info;
  stock:any;		
  dataFetched:boolean = false;
  following:boolean = false;
  constructor(private stocks:StocksService, private notification:NotificationService) { }

  ngOnInit() {

  	this.stocks.view(this.stock_info.symbol).subscribe((res:any) => {

  		this.dataFetched = true;
  		console.log(res.data);
  		this.stock = res.data;
  		this.stock.priceChange = this.stock_info.currentPrice - this.stock.regularMarketPreviousClose;
  	})
  }


  followStock() {

  	this.stocks.follow(this.stock_info.symbol).subscribe((res:any) => {

  		this.notification.showSuccessMsg(`Followed ${this.stock_info.symbol}`)
  		this.following = true;
  	});
  }

}
