import { Injectable } from '@angular/core';
import * as EventEmitter from 'events'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _userLoggedIn;
  loading = false;
  eventEmitter = new EventEmitter();

  constructor() {
    console.log('session')
    this.eventEmitter.on('loading', (res) => {
      console.log('loading status ', res);
      this.loading = true;
    })
  }

  get userLoggedIn() {
    return this._userLoggedIn;
  }

  set userLoggedIn(val) {
    this._userLoggedIn = val;
  }
}
