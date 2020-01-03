import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-followed-stocks',
  templateUrl: './followed-stocks.component.html',
  styleUrls: ['./followed-stocks.component.css']
})
export class FollowedStocksComponent implements OnInit {

  constructor(private stocks:StocksService) {}
  followedStocks:any;
  @Output() viewStock = new EventEmitter();

  ngOnInit() {

  	this.getStocks();
  }


  getStocks():void {

  	if(!this.checkStockExists()) {

	  	this.stocks.followedStocks().subscribe((res:any) => {

	  		this.followedStocks = res.data;
	  		this.stocks.stocksFollowed = res.data;
            console.log(res.data);
	  	})
	}
	else {

		this.followedStocks = this.stocks.stocksFollowed;
	}
  }


  checkStockExists():boolean {

  	if(this.stocks.stocksFollowed.length > 0) {

  		return true;
  	}

  	return false;
  }


  emitStockDetail(symbol:string, currentPrice:number):void {

    let stock_info = {symbol:symbol, currentPrice:currentPrice};
    this.viewStock.emit(stock_info);
  }

}
