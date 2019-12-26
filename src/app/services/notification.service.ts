import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr:ToastrService) { }

  showSuccessMsg(msg:string, title?:string) {

  	this.toastr.success(msg, title);
  }


  showErrorMsg(msg:string, title?:string) {

  	this.toastr.error(msg, title);
  }


  showInfoMsg(msg:string, title?:string) {

  	this.toastr.info(msg, title);
  }
}
