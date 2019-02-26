import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastObj = {
    isShow: false,
    toastMsg: '',
    toastType: 'alert-info'

  }

  constructor() { }

  presentToastInfo(msg: string, time: number = 3000) {
    this.toastObj.isShow = true;
    this.toastObj.toastMsg = msg;
    this.toastObj.toastType = 'alert-info'
    setTimeout(() => {
      this.toastObj.isShow = false;
    }, time)
  }

  presentToastDanger(msg: string, time: number = 3000) {
    this.toastObj.isShow = true;
    this.toastObj.toastMsg = msg;
    this.toastObj.toastType = 'alert-danger'
    setTimeout(() => {
      this.toastObj.isShow = false;
    }, time)
  }

  presentToastWarning(msg: string, time: number = 3000) {
    this.toastObj.isShow = true;
    this.toastObj.toastMsg = msg;
    this.toastObj.toastType = 'alert-warning'
    setTimeout(() => {
      this.toastObj.isShow = false;
    }, time)
  }




}
