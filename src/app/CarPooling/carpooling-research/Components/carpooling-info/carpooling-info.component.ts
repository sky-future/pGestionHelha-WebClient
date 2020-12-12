import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../../repositories/address-service.service';

@Component({
  selector: 'app-carpooling-info',
  templateUrl: './carpooling-info.component.html',
  styleUrls: ['./carpooling-info.component.css']
})
export class CarpoolingInfoComponent implements OnInit {

  infocontent : any ='';

  profile: any='';

  car: any='';

  constructor(private addressService : AddressService) {
    this.addressService.info.subscribe(infos => {
      this.infocontent = infos;
    })
    this.addressService.profil.subscribe(profil => {
      this.profile = profil;
    })
    this.addressService.voiture.subscribe(voit =>
      this.car = voit);
  }


  ngOnInit(): void {

  }

  test(){
    alert("voici le profil");
  }

}
