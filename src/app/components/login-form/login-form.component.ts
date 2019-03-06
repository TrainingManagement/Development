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
      emailId: ['', [Validators.required, Validators.email, Validators.pattern(this.PATTERN_CONSTANTS.EMAIL_PATTERN)]],
      password: ['', Validators.compose([Validators.required, Validators.pattern(this.PATTERN_CONSTANTS.PASSWORD_PATTERN)])]
    });
  }

  ngOnInit() {

  }


  onSubmit() {
    console.log('called', this.loginForm);
    setTimeout(() => {
      this.dismissLoading();
      this.session.eventEmitter.emit(this.CONSTANTS.EVENT_USER_LOGGED_IN);
      this.router.navigate(['/' + this.ROUTE_CONSTANTS.HOME_ROUTE]);
      this.toastService.presentToastInfo('Successfully Logged In');
    }, 2000);

  }

  get emailId() {
    return this.loginForm.controls['emailId']
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
      console.log("claimResponse objcet : ", data);
      this.toastService.presentToastInfo('successful api call')
    },
    fail: (errorService) => {
      console.log("claimResponse Error - ", errorService)
    }
  }

  login() {
    this.authService.addPosts({ as: 'asd' }, this.loginResponse)
  }
}
