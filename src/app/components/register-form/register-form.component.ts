import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { CustomValidators } from "../../common/validations/CustomValidators";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  showPass = false;

  date: Date = new Date();
  formattedMinDate =
    this.date.getFullYear() -
    18 +
    "/" +
    this.date.getMonth() +
    "/" +
    this.date.getDate();
  today;
  maxDate;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.today = this.formatDate(new Date());
    this.maxDate = this.formatDate(this.formattedMinDate);

    this.registerForm = this.formBuilder.group({
      firstName: [
        "",
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern("^[A-Za-z]+"),
          CustomValidators.cannotContainSpace
        ]
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern("^[A-Za-z]+"),
          CustomValidators.cannotContainSpace
        ]
      ],
      emailId: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[A-Za-z]+.[^A-Za-z][^@]+@capco.com"),
          CustomValidators.cannotContainSpace
        ]
      ],
      dob: new FormControl(this.maxDate, [
        Validators.required,
      CustomValidators.formatDate]),
      skill: new FormControl("Frontend"),
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{6,15}")
        ])
      ]
    });
  }

  ngOnInit() { }

  submit() {
    console.log("called", this.registerForm);
    this.router.navigate(["register/security"]);
  }

  get firstName() {
    return this.registerForm.controls["firstName"];
  }

  get lastName() {
    return this.registerForm.controls["lastName"];
  }

  get emailId() {
    return this.registerForm.controls["emailId"];
  }

  get password() {
    return this.registerForm.controls["password"];
  }

  get dob() {
    return this.registerForm.controls["dob"];
  }

  applyClass(control) {
    return control.touched ? (control.invalid ? "is-invalid" : "is-valid") : "";
  }

  show() {
    this.showPass = !this.showPass;
  }

  formatDate = date => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };
}
