import { Component, OnInit } from '@angular/core';
import { BaseApp } from "src/app/common/base-app";
import { Injector } from "@angular/core";
import { IServiceResponse } from '../../common/models/service-response';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.scss'],
})
export class LearnerComponent extends BaseApp implements OnInit {

  learnerObj = [
    {
      trainingName: 'Angular 7',
      category: 'Frontend',
      trainer: 'Mr.XYZ',
      trainingType: 'Mandatory',
      date: '07/04/2019',
      time: '11.00',
    },
    {
      trainingName: 'Core Java',
      category: 'Backend',
      trainer: 'Mr.MNB',
      trainingType: 'Mandatory',
      date: '07/04/2019',
      time: '11.00',
    },
    {
      trainingName: 'Automation Testing',
      category: 'Testing',
      trainer: 'Mr.LKJ',
      trainingType: 'Mandatory',
      date: '07/04/2019',
      time: '11.00',
    },
    {
      trainingName: 'Angular 7',
      category: 'Frontend',
      trainer: 'Mr.XYZ',
      trainingType: 'Mandatory',
      date: '07/04/2019',
      time: '11.00',
    },
    {
      trainingName: 'Core Java',
      category: 'Backend',
      trainer: 'Mr.MNB',
      trainingType: 'Mandatory',
      date: '07/04/2019',
      time: '11.00',
    },
    {
      trainingName: 'Automation Testing',
      category: 'Testing',
      trainer: 'Mr.LKJ',
      trainingType: 'Mandatory',
      date: '07/04/2019',
      time: '11.00',
    },
  ];

  constructor(  private dashboardService:DashboardService,
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {}

  ngAfterContentInit() {
    console.log('admin loaded');
    // TODO Api call to do
    this.getLearnerDashboard();
  }

  getLearnerDashboardResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log('getLearnerDashboard objcet : ', data);
    },
    fail: error => {
      console.log('getLearnerDashboard Error - ', error);
      this.toastService.presentToastDanger(error.error.message);
    },
  };

  getLearnerDashboard() {
    this.dashboardService.getLearnerDashboard(this.getLearnerDashboardResponse);
    console.log('getLearnerDashboard form res', this.getLearnerDashboardResponse);
  }
}
