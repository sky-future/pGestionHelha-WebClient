import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-stepper-form',
  templateUrl: './register-stepper-form.component.html',
  styleUrls: ['./register-stepper-form.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegisterStepperFormComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }

}
