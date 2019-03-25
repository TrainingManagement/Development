import { Component, OnInit } from '@angular/core';
import { BaseApp } from "src/app/common/base-app";
import { Injector } from "@angular/core";

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.scss']
})
export class LearnerComponent extends BaseApp implements OnInit {

  learnerObj = 
  [
    {"trainingName": "Angular 7","category": "Frontend","trainer": "Mr.XYZ","trainingType":"Mandatory","date":"07/04/2019","time":"11.00"},
   {"trainingName": "Core Java","category": "Backend","trainer": "Mr.MNB","trainingType":"Mandatory","date":"07/04/2019","time":"11.00"},
   {"trainingName": "Automation Testing","category": "Testing","trainer": "Mr.LKJ","trainingType":"Mandatory","date":"07/04/2019","time":"11.00"}, 
   {"trainingName": "Angular 7","category": "Frontend","trainer": "Mr.XYZ","trainingType":"Mandatory","date":"07/04/2019","time":"11.00"},
   {"trainingName": "Core Java","category": "Backend","trainer": "Mr.MNB","trainingType":"Mandatory","date":"07/04/2019","time":"11.00"},
   {"trainingName": "Automation Testing","category": "Testing","trainer": "Mr.LKJ","trainingType":"Mandatory","date":"07/04/2019","time":"11.00"},
  ];

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('admin loaded');
    // TODO Api call to do
  }

}
