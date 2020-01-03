import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  @Input() stock;
  
  chartType='line';
  chartDataset = [];
  chartLabels = ['', '', '', ''];
  chartOptions = {responsive:true,legend:{display:false},
                   scales:{ yAxes:[{gridLines:{zeroLineColor:'transparent', display:false}, ticks:{display:false, weight:3}}],
                          xAxes: [{gridLines:{zeroLineColor:'transparent', display:false}}]}
                 };
  chartColors = [
                  {backgroundColor: 'rgba(87, 160, 211, 0.08)',
                borderColor: 'rgba(87, 160, 211, 0.7)',
                borderWidth:1,
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                pointBorderWidth:1,
                  }]

  constructor() { }

  ngOnInit() {

  	   let data={data:[this.stock.open, this.stock.high, this.stock.low, this.stock.close]}
  	   this.chartDataset.push(data);
  }

}
