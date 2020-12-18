import {Component, Inject, OnInit} from '@angular/core';
import {RequestItem} from '../../commons/components/types/request-item';
import {Confirmation} from '../types/confirmation';
import {CarpoolingRequestService} from '../repositories/carpooling-request.service';
import {CarpoolingRequestDto} from '../types/carpooling-request-dto';
import {ProfileService} from '../../services/profile.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-carpooling-sender',
  templateUrl: './carpooling-sender.component.html',
  styleUrls: ['./carpooling-sender.component.css']
})
export class CarpoolingSenderComponent implements OnInit {

  requestItems: RequestItem[] = [];
  requestItem : RequestItem;
  confirmation : Confirmation;

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
    this.requestList = await this.carpoolingRequestService.querySenderByIdUser();
    // this.requestList = await this.carpoolingRequestService.queryRequestByIdUser(this.userService.userValue.id);
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

  Retirer(id : number){
    this.carpoolingRequestService.delete(this.userService.userValue.id, id);
    window.location.reload();
  }
}
