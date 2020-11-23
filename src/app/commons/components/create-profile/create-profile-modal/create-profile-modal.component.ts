import { Component, OnInit } from '@angular/core';

//To avoid circular dependencies between authservice, register and login
@Component({
  selector: 'app-create-profile-modal',
  styleUrls: ['./create-profile-modal.component.css'],
  template: '<app-create-profile></app-create-profile>'
})
export class CreateProfileModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
