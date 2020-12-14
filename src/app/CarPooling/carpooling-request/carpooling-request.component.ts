import {Component, Inject, OnInit} from '@angular/core';
import {CarpoolingRequestDto} from '../types/carpooling-request-dto';
import {CarpoolingRequestService} from '../repositories/carpooling-request.service';
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
  requestItem : RequestItem;

  i : number;
  longeur :number;


  constructor(
    private carpoolingRequestService : CarpoolingRequestService,
    @Inject(CarpoolingRequestService) private requestList : CarpoolingRequestDto,
    private profileService : ProfileService,
    private userService : UserService
  ){

  }

  async ngOnInit() {
    this.requestList = await this.carpoolingRequestService.queryRequestByIdUser(this.userService.userValue.id);
    this.longeur = Object.keys(this.requestList).length;
    if(this.longeur > 1){
      this.longeur--;
    }

    this.createList();
  }

  createList(){

    for (this.i = 0; this.longeur; this.i++) {

      this.requestItem = this.carpoolingRequestService.createRequestItem(
        this.i, this.requestList[this.i].firstname , this.requestList[this.i].lastname,
        this.requestList[this.i].telephone, this.requestList[this.i].idUser, this.requestList[this.i].confirmation);
      this.requestItems.push(this.requestItem);
    }
  }

  Accepter(Id){
    alert("Vous avez accepté sa demande")
  }

  Refuser(id : number){
    this.carpoolingRequestService.delete(id, this.userService.userValue.id);
    alert("Vous avez refusé sa demande");
  }

  Retirer(id : number){
    this.carpoolingRequestService.delete(id , this.userService.userValue.id);
    alert("vous avez retiré un menbre de la liste");
  }
}
