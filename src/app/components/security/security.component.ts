import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  securityForm: FormGroup;
  loading = false;


  constructor(private formBuilder: FormBuilder) { 
    this.securityForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      maidenName: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('called', this.securityForm);
  }

  get companyName() {
    return this.securityForm.controls['companyName']
  }

  get maidenName() {
    return this.securityForm.controls['maidenName']
  }

  applyClass(control) {
    return control.touched ? (control.invalid ? 'is-invalid' : 'is-valid') : '';
  }

}
