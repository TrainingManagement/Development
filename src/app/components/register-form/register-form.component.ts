import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  showPass = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.maxLength(15)]],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^$|^[A-Za-z0-9]+@capco.com')]],
      date: new FormControl(),
      password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,15}')])]
    });
  }

  ngOnInit() {

  }


  onSubmit() {
    console.log('called', this.registerForm)
  }

  get fullName() {
    return this.registerForm.controls['fullName']
  }

  get emailId() {
    return this.registerForm.controls['emailId']
  }

  get password() {
    return this.registerForm.controls['password']
  }

  applyClass(control) {
    return control.touched ? (control.invalid ? 'is-invalid' : 'is-valid') : '';
  }

  show() {
    this.showPass = !this.showPass;
  }

}

