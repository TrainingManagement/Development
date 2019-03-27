import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseApp, TrainingErrorHandler } from '../../common/base-app';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../../services/http-service/http.service';
import { IServiceResponse } from '../../common/models/service-response';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { CustomValidators } from '../../common/validations/CustomValidators';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent extends BaseApp implements OnInit {
  addUserForm: FormGroup;
  addTrainingForm: FormGroup;
  PATTERN_CONSTANTS: any;

  adminObj = [
    {trainingName: 'Angular 7', category: 'Frontend', trainer: 'Mr.XYZ'},
    {trainingName: 'Core Java', category: 'Backend', trainer: 'Mr.MNB'},
    {
      trainingName: 'Automation Testing',
      category: 'Testing',
      trainer: 'Mr.LKJ',
    },
    {trainingName: 'Angular 7', category: 'Frontend', trainer: 'Mr.XYZ'},
    {trainingName: 'Core Java', category: 'Backend', trainer: 'Mr.MNB'},
    {
      trainingName: 'Automation Testing',
      category: 'Testing',
      trainer: 'Mr.LKJ',
    },
    {trainingName: 'Angular 7', category: 'Frontend', trainer: 'Mr.XYZ'},
    {trainingName: 'Core Java', category: 'Backend', trainer: 'Mr.MNB'},
    {
      trainingName: 'Automation Testing',
      category: 'Testing',
      trainer: 'Mr.LKJ',
    },
  ];

  userTypeObj = [{type: 'Admin'}, {type: 'Trainer'}];

  courseCategoryObj = [
    {category: 'Frontend'},
    {category: 'Backend'},
    {category: 'BA'},
    {category: 'Dev Ops'},
    {category: 'Training'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private dashboardService:DashboardService,
    private authService: AuthenticationService,
    injector: Injector
  ) {
    super(injector);

    this.addUserForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.PATTERN_CONSTANTS.EMAIL_PATTERN),
        ],
      ],
      userType: [''],
    });

    this.addTrainingForm = this.formBuilder.group({
      coursename: [
        '',
        [
          Validators.required,
          Validators.maxLength(70),
          Validators.pattern(this.PATTERN_CONSTANTS.NAME_PATTERN),
          CustomValidators.cannotContainSpace,
        ],
      ],
      coursecategory: [''],
      description: new FormControl('', [Validators.maxLength(700)]),
      trainerEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.PATTERN_CONSTANTS.EMAIL_PATTERN),
        ],
      ],
    });
  }

  ngOnInit() {}

  ngAfterContentInit() {
    console.log('admin loaded');
    // TODO Api call to do
    this.getAdminDashboard();
  }

  submit() {
    console.log('add-userForm', this.addUserForm.value);
  }

  submitTraining() {
    console.log('add-trainingForm', this.addTrainingForm.value);
  }

  get email() {
    return this.addUserForm.controls['email'];
  }

  get description() {
    return this.addTrainingForm.controls['description'];
  }

  get coursename() {
    return this.addTrainingForm.controls['coursename'];
  }

  get trainerEmail() {
    return this.addTrainingForm.controls['trainerEmail'];
  }

  applyClass(control) {
    return control.touched ? (control.invalid ? 'is-invalid' : 'is-valid') : '';
  }

  addUserResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log('addUserResponse objcet : ', data);
    },
    fail: error => {
      console.log('addUserResponse Error - ', error);
      this.toastService.presentToastDanger(error.error.message);
    },
  };

  addUser() {
    this.authService.addUser(this.addUserForm.value, this.addUserResponse);
    console.log('addUser form res', this.addUserForm.value);
    this.addUserForm.reset();
  }

  addTrainingResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log('addTrainingResponse objcet : ', data);
      this.eventService.eventEmitter.emit(
        this.CONSTANTS.SESSION_USER_LOGGED_IN,
        data
      );
    },
    fail: error => {
      console.log('addTrainingResponse Error - ', error);
      this.toastService.presentToastDanger(error.error.message);
    },
  };

  addTraining() {
    this.authService.addTraining(
      this.addTrainingForm.value,
      this.addTrainingResponse
    );
    console.log('addTraining form res', this.addTrainingForm.value);
    //this.addTrainingForm.reset();
    
  }

  getAdminDashboardResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log('getAdminDashboard objcet : ', data);
    },
    fail: error => {
      console.log('addAdminResponse Error - ', error);
      this.toastService.presentToastDanger(error.error.message);
    },
  };

  getAdminDashboard() {
    this.dashboardService.getAdminDashboard(this.getAdminDashboardResponse);
    console.log('getAdminDashboard form res', this.getAdminDashboardResponse);

  }
}
