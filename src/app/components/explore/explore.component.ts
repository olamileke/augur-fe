import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  @Output() viewStock = new EventEmitter();
  exploredStocks:any;

  constructor(private stocks:StocksService) { }

  ngOnInit() {

    this.getStocks();  	
  }


  getStocks() {

      if(!this.checkStocksExists()) {

          this.stocks.explore().subscribe((res:any) => {

              this.exploredStocks = res.data;
              this.stocks.exploredStocks =  res.data;
          })
      }
      else {

          this.exploredStocks = this.stocks.exploredStocks;
      }
  }


  checkStocksExists():boolean {

      if(this.stocks.exploredStocks.length > 0) {

          return true;
      }

      return false;
  }


  emitStockDetail(symbol:string, currentPrice:number):void {

    let stock_info = {symbol:symbol, currentPrice:currentPrice};
    this.viewStock.emit(stock_info);
  }


}
