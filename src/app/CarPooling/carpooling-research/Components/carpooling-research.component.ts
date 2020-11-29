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

  zoom = 14
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 18,
    minZoom: 5,
  }
  maps:any
  markers = []
  infoWindows: any = []
  longueur : number
  i : number = 0

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
    })
    this.addressService.query().subscribe(address => this.addressList = address)
    this.longueur = Object.keys(this.addressList).length
    this.longueur--

    this.maps = new google.maps.Map(document.getElementById("map"), this.options);
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  click(event: google.maps.MouseEvent) {
    console.log(event)
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

  addMarker() {
    for (this.i ; this.longueur ; this.i++) {
      this.markers.push({
        position: {
          lat: parseFloat(this.addressList[this.i].latitude),
          lng: parseFloat(this.addressList[this.i].longitude),
        },
        label: {
          color: 'black',
          text: 'Marker label ' + (this.i + 1),
        },
        title: '' + (this.addressList[this.i].street + ' n°' + this.addressList[this.i].number + ' ' + this.addressList[this.i].city),
        info: 'Marker info ',
        options: {
          animation: google.maps.Animation.DROP,
        },

      })
    }
  }

  /*openInfo(map, marker) {
    //this.infoContent = content;
    this.info.open(map, this.marker);
  }*/

  // addInfoWindowToMarker(marker){
  //   let infoWindowContent = "test";
  //   let infoWindow = new google.maps.InfoWindow({
  //     content: infoWindowContent
  //   });
  //   marker.addListener('click', () => {
  //     console.log(infoWindow);
  //     this.closeAllInfoWindows();
  //     infoWindow.open(this.maps, marker);
  //   });
  //   this.infoWindows.push(infoWindow);
  // }

  addInFoWindowsToMarker(marker: HTMLElement, content){
    this.infoWindows = content
    this.info.open(this.map, marker)
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

}


