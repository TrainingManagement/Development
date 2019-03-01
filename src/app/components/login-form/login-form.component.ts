import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  showPass: boolean = false;


  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z]+.[^A-Za-z][^@]+@capco.com')]],
      password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,15}')])]
    });
  }

  ngOnInit() {

  }


  onSubmit() {
    console.log('called', this.loginForm)
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

}
