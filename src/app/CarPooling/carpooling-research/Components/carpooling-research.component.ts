import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import {AddresseGetDtoOutput} from '../../types/address-get-dto-output';
import {AddressService} from '../../repositories/address-service.service';




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
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 18,
    minZoom: 5,
  }
  markers = [];
  infoContent : any = '';
  longueur : number;
  i : number = 0;

  constructor(
    private addressService : AddressService,
    @Inject(AddressService) private addressList : AddresseGetDtoOutput

  ) {
  }


  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
    this.addressService.query().subscribe(address => this.addressList = address);
    this.longueur = Object.keys(this.addressList).length;
    this.longueur--;
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
        info: '&lt;b&gt; Adresse : &lt;/b&gt;' + (this.addressList[this.i].street + ' n°' + this.addressList[this.i].number + ', ' + this.addressList[this.i].city),
        options: {
          animation: google.maps.Animation.DROP,
        },
      });
    }
  }


  openInfo(marker: MapMarker, content) {
    var html = '<div id="content">' + '<h2 id="firstHeading" class="firstHeading">'
      + '</h2>' + '<p> Test ' + '</p>' + '</div>';
    var html = '[<input id="button" value="button"/>]' + 'salut';
    this.infoContent = content;
    this.info.open(marker);
  }

}


