import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ok} from 'assert';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  form: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      addresse: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }


  submit() {
    console.log(ok("ok"));
  }
}
