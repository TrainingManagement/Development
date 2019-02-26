import { Injector, EventEmitter } from '@angular/core';
import * as APP_CONSTANTS from './constants';
import { SessionService } from '../services/session.service';
import { EventService } from '../services/event.service';
import { CacheService } from '../services/cache.service';
import { ToastService } from '../services/toast.service';

export class BaseApp {

    // this will help to share data within 
    events: EventService;
    session: SessionService;
    CONSTANTS: any;
    cache: CacheService;
    toastService: ToastService;
    loading = false;

    constructor(
        injector: Injector
    ) {
        this.CONSTANTS = APP_CONSTANTS;
        this.session = injector.get(SessionService);
        this.events = injector.get(EventService);
        this.cache = injector.get(CacheService);
        this.toastService = injector.get(ToastService);
    }

    presentLoading() {
        console.log('present loading called')
        this.session.loading = true;
        this.dismissLoading();
    }

    dismissLoading() {
        setTimeout(() => {
            this.session.loading = false;
        }, 3000)
    }

}