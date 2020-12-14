import {Component, Inject, OnInit} from '@angular/core';
import {CarpoolingRequestDto} from '../types/carpooling-request-dto';
import {CarpoolingRequestService} from '../repositories/carpooling-request.service';
import {ProfileDtoOutput} from '../../DTOs/profile-dto-output';
import {ProfileService} from '../../services/profile.service';
import {UserService} from '../../services/user.service';
import {RequestItem} from '../../commons/components/types/request-item';

@Component({
  selector: 'app-carpooling-request',
  templateUrl: './carpooling-request.component.html',
  styleUrls: ['./carpooling-request.component.css']
})
export class CarpoolingRequestComponent implements OnInit {

  requestItems: RequestItem[] = [];

  //request : CarpoolingRequestDto ;
  profile : ProfileDtoOutput;
  i : number;
  x : number = 0;
  longeur :number;


  constructor(
    private carpoolingRequestService : CarpoolingRequestService,
    // Exemple si this.request ne fonctionne pas
    // @Inject(CarpoolingRequestService) private CarpoolingList : CarpoolingRequestDto,
    @Inject(CarpoolingRequestService) private requestList : CarpoolingRequestDto,
    private profileService : ProfileService,
    private userService : UserService
  ){

  }

  async ngOnInit() {
    this.requestList = await this.carpoolingRequestService.queryRequestByIdUser(this.userService.userValue.id);
    this.longeur = Object.keys(this.requestList).length;
    this.longeur--;
    for (this.i = 0; this.longeur; this.i++){
      this.x++;
      this.profile = await this.profileService.getProfilByIdUser(this.requestList[this.i].idRequestSender);
      this.requestItems[this.x].content = 'Name : ' + this.profile.lastname
        + ' Prénom : ' + this.profile.firstname + ' Téléphone : ' + this.profile.telephone;
      this.requestItems[this.x].title = 'Requete n° ' + this.x;
      this.requestItems[this.x].idRequest = this.profile.idUser;
    }
  }
}
