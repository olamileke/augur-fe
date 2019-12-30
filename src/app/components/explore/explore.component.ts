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

  	this.stocks.explore().subscribe((res:any) => {

  		this.exploredStocks=res.data;
  	})
  }


  emitStockDetail(symbol:string):void {

    this.viewStock.emit(symbol);
  }


}
