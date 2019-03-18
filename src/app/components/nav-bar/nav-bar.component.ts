import { Component, OnInit, Injector } from '@angular/core';
import { BaseApp } from '../../common/base-app';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent extends BaseApp implements OnInit {

  roleType:string;

  constructor( injector:Injector) { 

    super(injector);
    this.roleType = this.eventService.role;
  }

  ngOnInit() {
  }

  logout(){
    this.eventService.eventEmitter.emit(this.CONSTANTS.SESSION_USER_LOGGED_OUT);
  }

  setRole(role)
  {
      sessionStorage.setItem('role',role);
      //this.roleType = role;
      console.log("check with role",this.roleType)
  }

}
