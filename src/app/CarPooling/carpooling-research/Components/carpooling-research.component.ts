import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import {AddresseGetDtoOutput} from '../../types/address-get-dto-output';
import {AddressService} from '../../repositories/address-service.service';
import {ProfileService} from "../../../services/profile.service";
import {ProfileDtoOutput} from "../../../DTOs/profile-dto-output";
import {CarPoolingService} from "../../repositories/car-pooling.service";
import {OfferCarpoolingDto} from '../../types/offer-carpooling-dto';
import {IdUserByIdAddress} from "../../types/id-user-by-id-address";
import {CarDto} from "../../types/car-dto";




@Component({
  selector: 'app-carpooling-research',
  templateUrl: './carpooling-research.component.html',
  styleUrls: ['./carpooling-research.component.css']
})
export class CarpoolingResearchComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow


  zoom = 14;
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 18,
    minZoom: 5,
  };
  markers = [];
  infoContent : any = '';
  infoProfile : any = '';
  infoCar: any = '';
  longueur : number;
  i : number = 0;
  profile: ProfileDtoOutput;
  car : CarDto;

  constructor(
    private addressService : AddressService,
    private carpoolingService : CarPoolingService,
    @Inject(AddressService) private addressList : AddresseGetDtoOutput,
    @Inject(CarPoolingService) private offerCarpoolingList : OfferCarpoolingDto,
    private profileService: ProfileService,
  ) {
  }


  ngOnInit(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    this.carpoolingService.getListForCarpooling().subscribe(addressList => this.addressList = addressList);
    this.longueur = Object.keys(this.addressList).length;
    this.longueur--;
    this.addMarker();
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker() {
    for (this.i ; this.longueur ; this.i++) {
      this.markers.push({
        position: {
          lat: parseFloat(this.addressList[this.i].latitude),
          lng: parseFloat(this.addressList[this.i].longitude),
        },
        title: '' + (this.addressList[this.i].street + ' n°' + this.addressList[this.i].number + ', ' + this.addressList[this.i].city),
        info:'' + (this.addressList[this.i].street + ' n°' + this.addressList[this.i].number + ', ' + this.addressList[this.i].city),
        id : this.addressList[this.i].id,
        options: {
          animation: google.maps.Animation.DROP,
        },
      });
    }
  }

  idUser : number;
  idAdress : number;
  idUserss : IdUserByIdAddress;


  async OpenModal(marker: MapMarker, content, id) {
    this.infoContent = content;
    this.idAdress = id;

    this.idUserss = await this.addressService.getUserByIdAddress(this.idAdress);
    this.idUser = this.idUserss.idUser;


    this.profile = await this.profileService.getProfilByIdUser(this.idUser);
      this.infoProfile = '' + (this.profile.firstname + ' ' + this.profile.lastname + ', Téléphone : ' + this.profile.telephone);


    this.car = await this.carPoolingService.getCarByIdUser(this.idUser);
      this.infoCar = 'Nombre de places : ' + (this.car.placeNb);


    this.addressService.newInfo(this.infoContent);
    this.addressService.newProfil(this.infoProfile);
    this.addressService.newVoiture(this.infoCar);
    this.addressService.openResearchModal();
  }
}


