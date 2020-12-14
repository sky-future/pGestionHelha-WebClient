import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../../repositories/address-service.service';
import {UserService} from '../../../../services/user.service';
import {CarPoolingService} from '../../../repositories/car-pooling.service';
import {RequestcarpoolingPipe} from '../../../pipes/requestcarpooling.pipe';
import {CarPoolingRequestDto} from '../../../types/car-pooling-request-dto';
import {AlertService} from '../../../../services/alert.service';

@Component({
  selector: 'app-carpooling-info',
  templateUrl: './carpooling-info.component.html',
  styleUrls: ['./carpooling-info.component.css']
})
export class CarpoolingInfoComponent implements OnInit {

  private carPoolingRequestDTO : CarPoolingRequestDto;

  infocontent : any ='';

  profile: any='';

  car: any='';

  idRequestReceiver : number;

  constructor(private addressService : AddressService,
              private userSerivce : UserService,
              private carPoolingService : CarPoolingService,
              private alertService : AlertService) {
    this.addressService.info.subscribe(infos => {
      this.infocontent = infos;
    })
    this.addressService.profil.subscribe(profil => {
      this.profile = profil;
    })
    this.addressService.voiture.subscribe(voit =>
      this.car = voit);
    this.addressService.idRequestReceiver.subscribe(idRequestReceiver=>
      this.idRequestReceiver = idRequestReceiver);
  }



  ngOnInit(): void {

  }

  Demande(){
      let connectedUserId = this.userSerivce.userValue.id;

      this.carPoolingRequestDTO = new RequestcarpoolingPipe().transform(
        connectedUserId,
        this.idRequestReceiver,
        0
      );

      this.carPoolingService.requestCarpooling(this.carPoolingRequestDTO)
        .subscribe(data=>this.alertService.success("Votre demande a bien été envoyé"),
              error => this.alertService.error("Vous avez déjà fais une demande à cette personne !"));


  }

}
