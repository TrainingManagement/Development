import { Injectable } from '@angular/core';
import * as EventEmitter from 'events'
import * as APP_CONSTANTS from '../common/constants';
import { UserProfile } from '../common/models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userLoggedIn= false;
  private _user = new UserProfile();

  private _token: string = '';

  loading = false;
  eventEmitter = new EventEmitter();
  constructor() {

    this.eventEmitter.on(APP_CONSTANTS.EVENT_USER_LOGGED_IN, (res) => {
      this._user.isAdmin = false;
      this._user.name = 'CAPCO user';
      this._token = 'sgndskjbnagjks-332jnasfksdjnfb';
      console.log('user logged in ', res);
    })

    this.eventEmitter.on(APP_CONSTANTS.EVENT_USER_LOGGED_OUT, (res) => {
      console.log('user logged out ', res);
      console.log('Cache cleared');
    })

  }



  get user() {
    return this._user;
  }

  get token() {
    return this._token;
  }


}
