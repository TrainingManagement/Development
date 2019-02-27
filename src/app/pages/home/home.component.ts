import { Component, OnInit, Injector } from '@angular/core';
import { BaseApp } from '../../common/base-app';
import { UserProfile } from '../../common/models/user-profile';
import { SecurityQuestions } from '../../common/models/security';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseApp implements OnInit {



  constructor(
    private injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    // this.presentLoading();
    // this.session.eventEmitter.emit('loading')
  }

}
