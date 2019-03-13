import { Component, OnInit, Injector } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { CustomValidators } from "../../common/validations/CustomValidators";
import { BaseApp } from "../../common/base-app";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { fade } from "../../common/styles/animations";
import { AuthenticationService } from "../../services/auth/authentication.service";
import { IServiceResponse } from "../../common/models/service-response";
import { SecurityQuestions } from "../../common/models/security";
import { ForgotPassword } from "../../common/models/forgot-password.class";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
  animations: [fade]
})
export class ForgotPasswordComponent extends BaseApp implements OnInit {
  questions = "firstCompany";

  public forgotPasswordForm: FormGroup;
  showPass: boolean = false;

  constructor(
    injector: Injector,
    private authenticationService: AuthenticationService
  ) {
    super(injector);
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(this.PATTERN_CONSTANTS.EMAIL_PATTERN)
      ]),
      // selectQuestion: new FormControl("", [Validators.required]),
      answer: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
        CustomValidators.cannotContainSpace
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.min(6),
        Validators.max(15),
        Validators.pattern(this.PATTERN_CONSTANTS.PASSWORD_PATTERN)
      ])
    });
  }

  ngOnInit() {}

  submit() {
    let body = new ForgotPassword();
    body.email = this.email.value;
    body.password = this.password.value;
    body.qa[this.questions] = this.answer.value;
    console.log("answer ", body);
    this.authenticationService.forgot(body, this.forgotResponse);
  }

  get email() {
    return this.forgotPasswordForm.controls["email"];
  }

  get answer() {
    return this.forgotPasswordForm.controls["answer"];
  }

  get password() {
    return this.forgotPasswordForm.controls["password"];
  }

  applyClass(control) {
    return control.touched ? (control.invalid ? "is-invalid" : "is-valid") : "";
  }

  show() {
    this.showPass = !this.showPass;
  }

  forgotResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log("forgotResponse objcet : ", data);
      this.toastService.presentToastInfo("successful api call");
      this.eventService.eventEmitter.emit(
        this.CONSTANTS.SESSION_USER_LOGGED_IN,
        data
      );
    },
    fail: errorService => {
      console.log("forgotResponse Error - ", errorService);
      this.toastService.presentToastDanger("call failed");
    }
  };
}
