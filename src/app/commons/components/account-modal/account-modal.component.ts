import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

declare var $: any;

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrls: ['./account-modal.component.css']
})
export class AccountModalComponent implements OnInit {
  @ViewChild('openmodal') openmodal: ElementRef;

  constructor(public _authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.openmodal.nativeElement.click();
  }

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
