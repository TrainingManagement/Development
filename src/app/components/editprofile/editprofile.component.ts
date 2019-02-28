import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.scss"]
})
export class EditprofileComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = new FormGroup({
      contact: new FormControl("", [
        Validators.required,
        Validators.max(10000000000),
        Validators.min(1000000000)
      ])
    });
  }

  ngOnInit() {}

  get contact() {
    return this.profileForm.controls["contact"];
  }

  sumbit() {
    console.log("called", this.profileForm);
  }

  applyClass(control) {
    return control.touched || control.dirty
      ? control.invalid ? "is-invalid" : "is-valid"
      : "";
  }
}
