import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { LoadService } from '../../services/load.service';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent implements OnInit {

  tabs = {explore:true, followed_stocks:false, predictions:false, viewStock:false};
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthEnds=[31,28,31,30,31,30,31,31,30,31,30,31];
  monthEnding:number;
  countdown:string;
  date:string;
  time:string;
  timeFunc=interval(1000);
  viewedSymbol:string;

  isLoading:Subject<boolean> = this.load.isLoading;

  constructor(private load:LoadService) { }

  ngOnInit() {

 	let date = new Date();
  	this.date = this.getCurrentDate(date);
  }


  setActiveTab(tab:string) {

     let tabKeys = Object.keys(this.tabs);

     for(let i = 0; i < tabKeys.length; i++) {

         this.tabs[tabKeys[i]] = false;
     }

     this.tabs[tab] = true;
  }


  getCurrentDate(dt:Date) {

  	let day = this.days[dt.getDay()].slice(0,3);
  	let date = dt.getDate();
  	let month = this.months[dt.getMonth()];
  	let year = dt.getFullYear();

  	this.setTime();

  	return `${day}, ${date} ${month} ${year}`;
  }


  setTime() {	

      this.timeFunc.subscribe(() => {

      	  let date = new Date();
          let hours = date.getHours();
          let minutes = this.formatTime(date.getMinutes());
          let ext = 'AM';

          if(hours > 12) {

          	hours = hours - 12;
          	ext = 'PM';
          }


          if(hours == 0) {

            hours = 12;
          }

          this.time = `${hours}:${minutes} ${ext}`; 
        })
  	}


  	formatTime(time_val:number):string {

  		let newString = time_val.toString();

  		if(newString.length == 1) {

  			newString = '0' + newString;
  			return newString;
  		}

  		return newString; 
  	}


    viewStockDetail(symbol:string) {

        this.setActiveTab('viewStock');
        this.viewedSymbol = symbol;
    }

}
