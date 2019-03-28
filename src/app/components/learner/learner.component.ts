import { Component, OnInit } from '@angular/core';
import { BaseApp } from "src/app/common/base-app";
import { Injector } from "@angular/core";
import { IServiceResponse } from '../../common/models/service-response';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { TrainingData } from '../../common/models/training-data.class';

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.scss'],
})
export class LearnerComponent extends BaseApp implements OnInit {

  learnerObj: TrainingData[] = [];
  modalData: TrainingData = new TrainingData();

  constructor(private dashboardService: DashboardService,
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() { }

  ngAfterContentInit() {
    console.log('admin loaded');
    // TODO Api call to do
    this.getLearnerDashboard();
  }

  getLearnerDashboardResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log('getLearnerDashboard objcet : ', data);
      this.learnerObj = data.result;
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

  openModal(learnerData){
    this.modalData = learnerData;
    console.log('modal data',this.modalData);
  }
}
