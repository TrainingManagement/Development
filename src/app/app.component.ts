import { Component, Injector } from '@angular/core';
import { BaseApp } from './common/base-app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseApp {
  constructor(private injector: Injector) {
    super(injector);
  }
}
