import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import * as EventEmitter from 'events'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventEmitter = new EventEmitter();

  constructor(sessionService: SessionService) {

    this.eventEmitter.on('event',(res) => {
      console.log('login status ', res);
      sessionService.userLoggedIn = res;
    })
  }
}
