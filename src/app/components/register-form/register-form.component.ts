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
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z]+.[^A-Za-z][^@]+@capco.com')]],
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

  formatDate=(date)=>
  {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [year, month, day].join('-');
  }
  
    date:Date = new Date();
    today = this.formatDate(new Date());
    formattedMinDate=this.date.getFullYear()-18+"/"+this.date.getMonth()+"/"+ this.date.getDate();
    maxDate = this.formatDate(this.formattedMinDate);
  

    

    
}

