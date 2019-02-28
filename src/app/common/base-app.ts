import { Injector, EventEmitter } from '@angular/core';
import * as APP_CONSTANTS from './constants';
import { SessionService } from '../services/session.service';
import { CacheService } from '../services/cache.service';
import { ToastService } from '../services/toast.service';
import { WindowScrolling } from '../components/loading/WindowScrolling';

export class BaseApp {

    // this will help to share data within 
    session: SessionService;
    CONSTANTS: any;
    cache: CacheService;
    toastService: ToastService;
    loading = false;
    windowScrolling = new WindowScrolling();
    constructor(
        injector: Injector
    ) {
        this.CONSTANTS = APP_CONSTANTS;
        this.session = injector.get(SessionService);
        this.cache = injector.get(CacheService);
        this.toastService = injector.get(ToastService);
    }

    presentLoading() {
        console.log('present loading called')
        this.session.loading = true;
        this.windowScrolling.disable();
        this.dismissLoading();
    }

    dismissLoading() {
        setTimeout(() => {
            this.session.loading = false;
            this.windowScrolling.enable();
        }, 3000)
    }

}