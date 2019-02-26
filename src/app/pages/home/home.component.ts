import { Component, OnInit, Injector } from '@angular/core';
import { BaseApp } from '../../common/base-app';

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
    this.presentLoading();
  }

  ngOnInit() {
    this.presentLoading();
    // this.session.eventEmitter.emit('loading')
  }

}
