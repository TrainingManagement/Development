import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseApp } from '../../common/base-app';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../../services/http-service/http.service';
import { IServiceResponse } from '../../common/models/service-response';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { CustomValidators } from '../../common/validations/CustomValidators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends BaseApp implements OnInit {
  addUserForm: FormGroup;
  addTrainingForm:FormGroup;
  PATTERN_CONSTANTS:any;

  adminObj = 
  [
    {"trainingName": "Angular 7","category": "Frontend","trainer": "Mr.XYZ"},
   {"trainingName": "Core Java","category": "Backend","trainer": "Mr.MNB"},
   {"trainingName": "Automation Testing","category": "Testing","trainer": "Mr.LKJ"}, 
   {"trainingName": "Angular 7","category": "Frontend","trainer": "Mr.XYZ"},
   {"trainingName": "Core Java","category": "Backend","trainer": "Mr.MNB"},
   {"trainingName": "Automation Testing","category": "Testing","trainer": "Mr.LKJ"},
   {"trainingName": "Angular 7","category": "Frontend","trainer": "Mr.XYZ"},
   {"trainingName": "Core Java","category": "Backend","trainer": "Mr.MNB"},
   {"trainingName": "Automation Testing","category": "Testing","trainer": "Mr.LKJ"}
  ];

  userTypeObj = [{type:"Trainer"},
                {type:"Learner"}];

  courseCategoryObj = [{category:"Frontend"},
                        {category:"Backend"},
                        {category:"BA"},
                        {category:"Dev Ops"},
                        {category:"Training"}];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private authService: AuthenticationService,
    injector: Injector) {
    super(injector);
    this.addUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.PATTERN_CONSTANTS.EMAIL_PATTERN)]],      
      userType: ['']      
    });

    this.addTrainingForm = this.formBuilder.group({
      courseName: ["",[Validators.required,Validators.maxLength(70),Validators.pattern(this.PATTERN_CONSTANTS.NAME_PATTERN),CustomValidators.cannotContainSpace]],
      desc: new FormControl("", [Validators.maxLength(700)])
    });
  }

  ngOnInit() {
    

  }
  

  get email() {
    return this.addUserForm.controls['email']
  }
  

  get desc() {
    return this.addTrainingForm.controls["desc"];
  }

  get courseName() {
    return this.addTrainingForm.controls["courseName"];
  }

  applyClass(control) {
    return control.touched ? (control.invalid ? 'is-invalid' : 'is-valid') : '';
  }
  

}
