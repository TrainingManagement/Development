import { Injectable, Injector } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BaseApp } from '../../common/base-app';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService extends BaseApp implements CanActivate {

  constructor(
    public router: Router,
    injector: Injector) { 
    super(injector);
  }

  canActivate(): boolean {
    if (!this.session.isUserLoggedIn) {
      this.toastService.presentToastDanger('Please login first.');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
