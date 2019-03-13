import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseApp } from '../../common/base-app';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../../services/http-service/http.service';
import { IServiceResponse } from '../../common/models/service-response';
import { AuthenticationService } from '../../services/auth/authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends BaseApp implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  showPass: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private authService: AuthenticationService,
    injector: Injector) {
    super(injector);
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.PATTERN_CONSTANTS.EMAIL_PATTERN)]],
      password: ['', Validators.compose([Validators.required, Validators.pattern(this.PATTERN_CONSTANTS.PASSWORD_PATTERN)])]
    });
  }

  ngOnInit() {

  }

  get email() {
    return this.loginForm.controls['email']
  }

  get password() {
    return this.loginForm.controls['password']
  }

  applyClass(control) {
    return control.touched ? (control.invalid ? 'is-invalid' : 'is-valid') : '';
  }

  show() {
    this.showPass = !this.showPass;
  }
  // 9789000010134

  loginResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log("loginResponse objcet : ", data);
      this.toastService.presentToastInfo('successful api call');
      this.eventService.eventEmitter.emit(this.CONSTANTS.SESSION_USER_LOGGED_IN, data);
      this.getProfile();
    },
    fail: (errorService) => {
      console.log("loginResponse Error - ", errorService);
      this.toastService.presentToastDanger('call failed');
    }
  }


  profileResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log("profile objcet : ", data);
      this.eventService.eventEmitter.emit(this.CONSTANTS.SESSION_USER_PROFILE, data.result);
      this.router.navigate(['/home'])
    },
    fail: (errorService) => {
      console.log("profile Error - ", errorService);
    }
  }


  login() {
    this.authService.login(this.loginForm.value,this.loginResponse)
    console.log("login form res",this.loginForm.value);
  }

  getProfile() {
    this.authService.getProfile(this.profileResponse);
  }

}
