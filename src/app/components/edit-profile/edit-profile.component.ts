import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BaseApp } from '../../common/base-app';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent extends BaseApp implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, injector: Injector) {
    super(injector);
    this.profileForm = new FormGroup({
      contact: new FormControl("", [
        Validators.required,
        Validators.max(10000000000),
        Validators.min(1000000000)
      ]),
      bio: new FormControl("", [
        // Validators.required,
        Validators.maxLength(140)
      ])
    });
  }

  ngOnInit() {}

  get contact() {
    return this.profileForm.controls["contact"];
  }
  get bio() {
    return this.profileForm.controls["bio"];
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