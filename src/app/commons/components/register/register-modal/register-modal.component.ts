import { Component, OnInit } from '@angular/core';

//To avoid circular dependencies between authservice, register and login
@Component({
  selector: 'app-register-modal',
  styleUrls: ['./register-modal.component.css'],
  template: `<app-register></app-register>`
})
export class RegisterModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
