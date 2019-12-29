import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private stocks:StocksService) { }

  ngOnInit() {

  	this.stocks.explore().subscribe((res:any) => {

  		console.log(res.data);
  	})
  }

}
