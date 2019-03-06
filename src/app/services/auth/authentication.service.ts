import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { BaseApp } from '../../common/base-app';
import { IServiceResponse } from '../../common/models/service-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseApp {

  constructor(
    private httpService: HttpService,
    injector: Injector
  ) {
    super(injector);
  }

  login(body: any, serviceResponse: IServiceResponse<any>) {
    this.httpService.post(this.URL_CONSTANTS.LOGIN_URL, serviceResponse, body);
  }

  getPosts() {

  }

  addPosts(body: any, serviceResponse: IServiceResponse<any>) {
    this.httpService.post(this.URL_CONSTANTS.POST_URL, serviceResponse, body);
  }
}
