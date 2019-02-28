import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  questions = [
    "What is your Date of Birth?",
    "What is your Maidens Name?",
    "What is your First Company Name?"
  ];

  public forgotPasswordForm: FormGroup;
  showPass: boolean = false;

  constructor() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[A-Za-z]+.[^A-Za-z][^@]+@capco.com")
      ]),
      selectQuestion: new FormControl("", [Validators.required]),
      answer: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.min(6),
        Validators.max(15),
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{6,15}"
        )
      ])
    });
  }

  ngOnInit() {}

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
