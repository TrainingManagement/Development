import { Component, OnInit, Injector } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { CustomValidators } from "../../common/validations/CustomValidators";
import { BaseApp } from '../../common/base-app';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fade } from '../../common/styles/animations';

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
  animations: [fade]
})
export class ForgotPasswordComponent extends BaseApp implements OnInit {
  questions = [
    "What is your Date of Birth?",
    "What is your Maidens Name?",
    "What is your First Company Name?"
  ];

  public forgotPasswordForm: FormGroup;
  showPass: boolean = false;

  constructor(injector: Injector) {
    super(injector);
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(this.PATTERN_CONSTANTS.EMAIL_PATTERN)
      ]),
      selectQuestion: new FormControl("", [Validators.required]),
      answer: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
        CustomValidators.cannotContainSpace
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.min(6),
        Validators.max(15),
        Validators.pattern(
          this.PATTERN_CONSTANTS.PASSWORD_PATTERN
        )
      ])
    });
  }

  ngOnInit() { }

  submit() {
    console.log("called", this.forgotPasswordForm);
  }

  get email() {
    return this.forgotPasswordForm.controls["email"];
  }

  get selectQuestion() {
    return this.forgotPasswordForm.controls["selectQuestion"];
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
}
