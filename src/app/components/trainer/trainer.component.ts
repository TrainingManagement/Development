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

@Component({
  selector: "app-trainer",
  templateUrl: "./trainer.component.html",
  styleUrls: ["./trainer.component.scss"]
})
export class TrainerComponent extends BaseApp implements OnInit {
 
  trainerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private dashboardService:DashboardService, injector: Injector) {
    super(injector);
    this.trainerForm = this.formBuilder.group({
      trainingName: [
        "",
        [
          Validators.required,
          Validators.maxLength(70),
          CustomValidators.cannotContainSpace
        ]
      ],
      trainingType: [
        "",
        [Validators.required, CustomValidators.cannotContainSpace]
      ]
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

  applyClass(control) {
    return control.touched ? (control.invalid ? "is-invalid" : "is-valid") : "";
  }

  getTrainerDashboardResponse = <IServiceResponse<any>>{
    success: (data: any) => {
      console.log('getLearnerDashboard objcet : ', data);
    },
    fail: error => {
      console.log('getLearnerDashboard Error - ', error);
      this.toastService.presentToastDanger(error.error.message);
    },
  };

  getTrainerDashboard() {
    this.dashboardService.getTrainerDashboard(this.getTrainerDashboardResponse);
  }
}
