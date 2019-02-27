import { Injectable } from '@angular/core';
import * as EventEmitter from 'events'
import { WindowScrolling } from '../components/loading/WindowScrolling';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userLoggedIn;
  private _user = {
    name: 'user name',
    email: 'capco@capco.com'
  }
  loading = false;
  eventEmitter = new EventEmitter();
  constructor() {

    this.eventEmitter.on('loading', (res) => {
      console.log('loading status ', res);
      this.loading = true;
    })
    
  }



  get user() {
    return this._user;
  }


}
