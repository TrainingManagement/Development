import { any } from 'codelyzer/util/function';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';  
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) 
  { 
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(15)]],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^$|^[A-Za-z0-9]+@capco.com')]],  
      date: new FormControl(),      
      password: ['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,15}')])]
  });
  }

  ngOnInit() {
   
  }
  

  onSubmit(){
  console.log('called', this.registerForm)
}

get firstName(){
  return this.registerForm.controls['firstName']
}

get emailId(){
  return this.registerForm.controls['emailId']
}

get password(){
  return this.registerForm.controls['password']
}

applyClass(control){
 return control.touched ?  (control.invalid ? 'is-invalid' : 'is-valid' ) : '';
} 


  
 }

