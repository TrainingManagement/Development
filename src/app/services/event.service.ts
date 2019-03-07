import { Injectable } from "@angular/core";
import * as EventEmitter from "events";
import * as APP_CONSTANTS from "../common/constants/constants";
import { UserProfile } from "../common/models/user-profile";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EventService {
  private _userLoggedIn = false;
  private _user = new UserProfile();
  private _token: string = "";
  loading = false;
  eventEmitter = new EventEmitter();

  constructor(router: Router) {


    this.eventEmitter.on(APP_CONSTANTS.EVENT_USER_LOGGED_IN, res => {
      this._userLoggedIn = true;
    });

    this.eventEmitter.on(APP_CONSTANTS.EVENT_USER_LOGGED_OUT, res => {
      this._userLoggedIn = false;
      router.navigate(["/"]);
      sessionStorage.clear();
      console.log("Cache cleared");
    });
  }

  get user() {
    return this._user;
  }

  get isUserLoggedIn() {
    return this._userLoggedIn;
  }

  get token() {
    return this._token;
  }
}