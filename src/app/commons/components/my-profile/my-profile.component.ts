import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {AddresseGetDtoOutput} from '../../../CarPooling/types/address-get-dto-output';
import {AddressService} from '../../../CarPooling/repositories/address-service.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  haveAddress: Boolean;
  address : AddresseGetDtoOutput;

  constructor(private addressService : AddressService){
  }

  async ngOnInit(){
    this.haveAddress = await this.addressService.haveAddress();
  }

  onTabChanged(event: MatTabChangeEvent) : void{
  }
}
