import { Injector, EventEmitter } from '@angular/core';
import * as APP_CONSTANTS from './constants/constants';
import * as ROUTE_CONSTANTS from './constants/routing-constants'
import * as URL_CONSTANTS from './constants/url-constants'
import { EventService } from '../services/event.service';
import { CacheService } from '../services/cache.service';
import { ToastService } from '../services/toast.service';
import { WindowScrolling } from '../components/loading/WindowScrolling';
import * as PATTERN from '../common/validations/pattern-constants';
export class BaseApp {

    // this will help to share data within 
    eventService: EventService;
    CONSTANTS: any;
    ROUTE_CONSTANTS: any;
    URL_CONSTANTS: any;
    PATTERN_CONSTANTS: any;
    cache: CacheService;
    toastService: ToastService;
    loading = false;
    windowScrolling = new WindowScrolling();
    constructor(
        injector: Injector
    ) {
        this.CONSTANTS = APP_CONSTANTS;
        this.ROUTE_CONSTANTS = ROUTE_CONSTANTS;
        this.URL_CONSTANTS = URL_CONSTANTS;
        this.PATTERN_CONSTANTS = PATTERN;
        this.eventService = injector.get(EventService);
        this.cache = injector.get(CacheService);
        this.toastService = injector.get(ToastService);
    }

    presentLoading(data) {
        console.log('present loading called')
        this.eventService.loading = data;
        this.windowScrolling.disable();
    }

    dismissLoading() {
        this.eventService.loading = false;
        this.windowScrolling.enable();
    }

}