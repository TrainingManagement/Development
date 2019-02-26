import { Injectable, Injector } from "@angular/core";
import {
    HttpInterceptor, HttpRequest,
    HttpHandler,
    HttpEvent, HttpErrorResponse, HttpResponse
} from "@angular/common/http";
import * as HttpStatus from 'http-status-codes';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/** 
 * @author Keyur Joshi
*/
@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(
        private injector: Injector
    ) {

    }

    /**
     * 
     * @param request 
     * @param next 
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let customReq;

        // clone the original header object
        customReq = request.clone({
            headers: request.headers
                .set("Accept", "application/json")
                .set("Access-Control-Allow-Credentials", "true")
                .set("Access-Control-Allow-Methods", "GET, POST,PUT")
                .set("Access-Control-Allow-Headers", "X-Requested-With,content-type")
                .set("Access-Control-Allow-Origin", "*")
        });

        console.log('requesr made for - ', customReq);

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }), catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                return throwError(error);
            }))
    }
}

