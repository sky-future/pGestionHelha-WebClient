import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import {AddresseGetDtoOutput} from '../../types/address-get-dto-output';
import {AddressService} from '../../repositories/address-service.service';
import {ProfileService} from "../../../services/profile.service";
import {ProfileDtoOutput} from "../../../DTOs/profile-dto-output";
import {CarPoolingService} from "../../repositories/car-pooling.service";
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
  longueur : number;
  i : number = 0;
  profile: ProfileDtoOutput;
  carPooling : CarDto;

  constructor(
    private addressService : AddressService,
    @Inject(AddressService) private addressList : AddresseGetDtoOutput,
    private profileService: ProfileService,
    private carPoolingService: CarPoolingService

  ) {
  }


  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    this.addressService.query().subscribe(address => this.addressList = address);
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
        options: {
          animation: google.maps.Animation.DROP,
        },
      });
    }
  }

  idUser : number = 14;

  OpenModal(marker: MapMarker, content){
    this.infoContent = content;
    this.addressService.newInfo(this.infoContent);
    this.profileService.getProfilByIdUser(this.idUser).subscribe(profile => this.profile = profile);
    this.infoProfile = ''+ (this.profile.firstname + ' ' + this.profile.lastname + ', Téléphone : ' + this.profile.telephone);
    this.addressService.newProfil(this.infoProfile);
    this.addressService.openResearchModal();
  }
}


