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
    {"trainingName": "Angular 7","category": "Frontend","trainer": "Mr.XYZ","trainingType":"Mandatory"},
   {"trainingName": "Core Java","category": "Backend","trainer": "Mr.MNB","trainingType":"Mandatory"},
   {"trainingName": "Automation Testing","category": "Testing","trainer": "Mr.LKJ","trainingType":"Mandatory"}, 
   {"trainingName": "Angular 7","category": "Frontend","trainer": "Mr.XYZ","trainingType":"Mandatory"},
   {"trainingName": "Core Java","category": "Backend","trainer": "Mr.MNB","trainingType":"Mandatory"},
   {"trainingName": "Automation Testing","category": "Testing","trainer": "Mr.LKJ","trainingType":"Mandatory"},
  ];

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit() {
  }

}
