import { Component, OnInit } from '@angular/core';

//To avoid circular dependencies between authservice, register and login
@Component({
  selector: 'app-login-modal',
  styleUrls: ['./login-modal.component.css'],
  template: `<app-login></app-login>`
})
export class LoginModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
