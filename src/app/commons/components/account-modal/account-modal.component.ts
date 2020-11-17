import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.css']
})
export class AccountModalComponent implements OnInit {

  //showModal: boolean;

  constructor(public _authService: AuthenticationService) { }

  ngOnInit(): void {
  }

 // show(){
 //    this.showModal = true;
 // }
 //
 //   hideModal(){
 //    this.showModal = false;
 //  }


  static showModal(): void{
    $("#accountModal").modal('show');
  }

  static hideModal(): void{
    $("#accountModal").modal('hide');
  }

  get authService(): AuthenticationService{
    return this._authService;
  }


}
