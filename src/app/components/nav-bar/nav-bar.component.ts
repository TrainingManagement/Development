import { Component, OnInit, Injector } from '@angular/core';
import { BaseApp } from '../../common/base-app';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends BaseApp implements OnInit {

  constructor( injector:Injector) { 
    super(injector);
  }

  ngOnInit() {
  }

  logout(){
    this.eventService.eventEmitter.emit(this.CONSTANTS.SESSION_USER_LOGGED_OUT);
  }

}
