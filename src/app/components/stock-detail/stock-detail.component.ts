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
    unfollow_prompt:boolean = false;

    chartType='line';
    chartDataset = [];
    currentLabels = ['Open', 'High', 'Low', 'Close/Current']; 
    currentData;
    chartLabels;
    chartOptions = {responsive:true,legend:{display:false},
                                     scales:{ yAxes:[{gridLines:{zeroLineColor:'transparent', display:false}, ticks:{fontColor: "rgba(0,0,0,0.8)", fontFamily:'Kulim Park'}}],
                                                    xAxes: [{gridLines:{zeroLineColor:'transparent', display:false}, ticks:{fontColor: "rgba(0,0,0,0.8)", fontFamily:'Kulim Park'}}]}
                                 };
    chartColors = [ {backgroundColor: 'rgba(87, 160, 211, 0.08)',
                    borderColor: 'rgba(87, 160, 211, 0.7)',
                    borderWidth:1,
                    pointBackgroundColor: 'transparent',
                    pointBorderColor: 'transparent',
                    pointBorderWidth:1,
                        }];
    five_day_history;
    month_history;
    constructor(private stocks:StocksService, private notification:NotificationService) { }

    ngOnInit() {

        this.stocks.view(this.stock_info.symbol).subscribe((res:any) => {

            this.dataFetched = true;
            this.stock = res.data;
            this.stock.priceChange = this.stock_info.currentPrice - this.stock.regularMarketPreviousClose;

            if(res.following) {

                this.following = true;
            }

            this.chartLabels = this.currentLabels;

            let data={data:[this.stock.regularMarketPrice, this.stock.dayHigh, this.stock.dayLow, this.stock_info.currentPrice]};
            this.currentData = data;
            this.chartDataset.push(data);
            this.five_day_history = res.five_day_history
            this.month_history = res.single_month_history;
        })
    }


    follow() {

        this.stocks.follow(this.stock_info.symbol).subscribe((res:any) => {

            this.notification.showSuccessMsg(`Followed ${this.stock_info.symbol}`)
            this.following = true;
                this.stocks.stocksFollowed.push(this.createFollowedStock())
        });
    }


    unfollow(execute:boolean) {

            this.unfollow_prompt = !this.unfollow_prompt;

            if(!execute) {

                    return false;
            }

            this.stocks.unfollow(this.stock_info.symbol).subscribe((res:any) => {

                    this.notification.showSuccessMsg(`Unfollowed ${this.stock_info.symbol}`)
                    this.following = false;
                    this.deleteFollowedStock();
            });
    }


    promptUnfollow() {

            this.unfollow_prompt = !this.unfollow_prompt;
    }


    createFollowedStock():any {

            let direction;
            (this.stock.priceChange > 0) ? direction = "up" : direction = "down"; 

            let stock = {symbol:this.stock_info.symbol, close:this.stock_info.currentPrice,
                                     priceChange:this.stock.priceChange, direction:direction,
                                     high:this.stock.dayHigh, low:this.stock.dayLow, open:this.stock.regularMarketPrice};

            return stock;
    }


    deleteFollowedStock():void {

            // this.stocks.stocksFollowed.filter((stock) => {


            // })[0].
    }


    changeGraph(event:any) {

        if(event.target.value == 'Current Day') {

            this.chartLabels = this.currentLabels;
            this.chartDataset = [];
            this.chartDataset.push(this.currentData);
        }


        if(event.target.value == 'Last 5 days') {

            this.chartLabels = this.five_day_history.dates;
            let data = {data:this.five_day_history.values};
            this.chartDataset = [];
            this.chartDataset.push(data);
        }


        if(event.target.value == 'Last Month') {

            this.chartLabels = this.month_history.dates;
            let data = {data:this.month_history.values};
            this.chartDataset = [];
            this.chartDataset.push(data);
        }
    }


}
