import { DashboardService } from '../../services/dashboard/dashboard.service';
import { Component, OnInit, Injector } from "@angular/core";
import { BaseApp } from "../../common/base-app";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { CustomValidators } from "../../common/validations/CustomValidators";
import { IServiceResponse } from '../../common/models/service-response';
import { TrainingData } from '../../common/models/training-data.class';

@Component({
  selector: "app-trainer",
  templateUrl: "./trainer.component.html",
  styleUrls: ["./trainer.component.scss"]
})
export class TrainerComponent extends BaseApp implements OnInit {
  trainerObj: TrainingData[] = [];
  modalData: TrainingData = new TrainingData();

  trainerForm: FormGroup;
  trainingList:TrainingData[]=[];
  // trainingCategory:any
  completionStatus:any
  constructor(private formBuilder: FormBuilder,
    private dashboardService:DashboardService, injector: Injector) {
    super(injector);
    this.trainerForm = this.formBuilder.group({
      trainingName: [
        "", [
          Validators.required,
          Validators.maxLength(70),
          CustomValidators.cannotContainSpace
        ]
      ],
      trainingType: [
        "",
        [Validators.required, CustomValidators.cannotContainSpace]
      ],
      courseCategory: [''],
      trainerName: [''],
      date: [''],
      startTime: [''],
      endTime: [''],
      completionStatus: ['']
    });
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('trainer loaded');
    // TODO Api call to do
    this.getTrainerDashboard();
  }

  get trainingName() {
    return this.trainerForm.controls["trainingName"];
  }

  get trainingType() {
    return this.trainerForm.controls["trainingType"];
  }

  get courseCategory(){
    return this.trainerForm.controls["courseCategory"];
  }

  applyClass(control) {
    return control.touched ? (control.invalid ? "is-invalid" : "is-valid") : "";
  }

  getTrainerDashboardResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log('getTrainerDashboard objcet : ', data);
      this.trainingList=data.result;
    },
    fail: error => {
      console.log('getTrainerDashboard Error - ', error);
      this.toastService.presentToastDanger(error.error.message);
    },
  };

  getTrainerDashboard() {
    this.dashboardService.getTrainerDashboard(this.getTrainerDashboardResponse);
  }

  getupdateTrainerResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log('getupdateTrainer objcet : ', data);
    },
    fail: error => {
      console.log('getupdateTrainer Error - ', error);
      this.toastService.presentToastDanger(error.error.message);
    },
  };
      
  getUpdateTrainer()
  {
  let updateTrainerObj = {
    date : this.trainerForm.controls['date'].value,
    startTime: this.trainerForm.controls['startTime'].value,
    endTime: this.trainerForm.controls['endTime'].value,
    completionStatus:this.trainerForm.controls['completionStatus'].value,
    courseName: this.trainerForm.controls['trainingName'].value,
    trainerEmail:sessionStorage.getItem('username')
  }

     this.dashboardService.getUpdateTrainer(updateTrainerObj,this.getupdateTrainerResponse);
    console.log("Update",this.trainerForm.value);
  }

  openModal(training){
    this.modalData = training;
    console.log('trainer modal data',this.modalData);
    this.trainingName.setValue(this.modalData.trainingName)
    this.courseCategory.setValue(this.modalData.courseCategory)
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
