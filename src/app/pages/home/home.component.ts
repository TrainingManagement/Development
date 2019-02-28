import { Component, OnInit, Injector } from '@angular/core';
import { BaseApp } from '../../common/base-app';
import { UserProfile } from '../../common/models/user-profile';
import { SecurityQuestions } from '../../common/models/security';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseApp implements OnInit {


  profileForm;
  
  constructor(
    private injector: Injector
  ) {
    super(injector);

    this.profileForm = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('',Validators.required),
    });
    
  }

  ngOnInit() {
    // this.presentLoading();
    // this.session.eventEmitter.emit('loading')
  }

  sumbit(){
    console.log('called', this.profileForm)
  }

  get firstName(){
    return this.profileForm.controls['firstName']
  }

  applyClass(control){
   return control.touched ?  (control.invalid ? 'is-invalid' : 'is-valid' ) : '';
  }

}
