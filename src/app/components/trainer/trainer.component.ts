import { Component, OnInit, Injector } from "@angular/core";
import { BaseApp } from "../../common/base-app";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { CustomValidators } from "../../common/validations/CustomValidators";

@Component({
  selector: "app-trainer",
  templateUrl: "./trainer.component.html",
  styleUrls: ["./trainer.component.scss"]
})
export class TrainerComponent extends BaseApp implements OnInit {
 
  trainerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, injector: Injector) {
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
}
