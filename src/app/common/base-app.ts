import { Injector, EventEmitter } from '@angular/core';
import * as APP_CONSTANTS from './constants/constants';
import * as ROUTE_CONSTANTS from './constants/routing-constants'
import { SessionService } from '../services/session.service';
import { CacheService } from '../services/cache.service';
import { ToastService } from '../services/toast.service';
import { WindowScrolling } from '../components/loading/WindowScrolling';
import * as PATTERN  from '../common/validations/pattern-constants';
export class BaseApp {

    // this will help to share data within 
    session: SessionService;
    CONSTANTS: any;
    ROUTE_CONSTANTS: any;
    PATTERN_CONSTANTS:any;
    cache: CacheService;
    toastService: ToastService;
    loading = false;
    windowScrolling = new WindowScrolling();
    constructor(
        injector: Injector
    ) {
        this.CONSTANTS = APP_CONSTANTS;
        this.ROUTE_CONSTANTS = ROUTE_CONSTANTS;
        this.PATTERN_CONSTANTS = PATTERN;
        this.session = injector.get(SessionService);
        this.cache = injector.get(CacheService);
        this.toastService = injector.get(ToastService);
    }

    presentLoading() {
        console.log('present loading called')
        this.session.loading = true;
        this.windowScrolling.disable();
    }

    dismissLoading() {
        this.session.loading = false;
        this.windowScrolling.enable();
    }

}