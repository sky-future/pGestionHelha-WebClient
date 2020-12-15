import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AddressCarDto} from '../types/address-car-dto';
import {AddressService} from '../repositories/address-service.service';
import {UserService} from '../../services/user.service';
import {AlertService} from '../../services/alert.service';
import {AddresseGetDtoOutput} from '../types/address-get-dto-output';
import {AddressOutput} from '../types/address-output';
import {CarPoolingService} from '../repositories/car-pooling.service';
import {CarOutput} from '../types/car-output';

@Component({
  selector: 'app-carpooling-profile',
  templateUrl: './carpooling-profile.component.html',
  styleUrls: ['./carpooling-profile.component.css']
})
export class CarpoolingProfileComponent implements OnInit {
  @ViewChild('street') street: ElementRef;
  @ViewChild('number') number: ElementRef;
  @ViewChild('postalCode') postalCode: ElementRef;
  @ViewChild('city') city: ElementRef;
  @ViewChild('country') country: ElementRef;

  @ViewChild('immatriculation') immatriculation: ElementRef;
  @ViewChild('placeNb') placeNb: ElementRef;


  address : AddresseGetDtoOutput;
  car : CarOutput;
  isHidden : boolean[];
  changedContent: string[] = ['votre rue.', 'votre numéro.', 'votre code postal.', 'votre ville.', 'vottre pays.', 'votre immatriculation.', 'votre nombre de places.'];
  i: number;
  showForm: boolean = false;
  submitted = false;

  geocoder: any;
  lat : number;
  long: number;
  confirm : boolean;
  private placenb: number;



  constructor(private addresseService : AddressService,
              private userService : UserService,
              private alertService: AlertService,
              private carpoolingService : CarPoolingService) { }

  async ngOnInit() {
    this.addresseService.getAddressByIdUser().subscribe(address => this.address = address);
    this.car = await this.carpoolingService.getCarByIdUser(this.userService.userValue.id);
    this.hideElements();
  }

  hideElements() {
    this.isHidden = [false, false, false, false, false, false, false];
  }

  confirmChange(nb: number) {
    //Todo faire des vérifs sur les valeurs genre téléphone en suivant le pattern etc.. Qu'il y a eu des changements

    //Vérifie si modif
    this.findDifference(nb);
    if (this.i == 0) {
      this.alertService.warn('Aucune modification introduite.');
      return;
    }


    let addressMod = this.addresseService.
    createAddressOutput(
        this.address.street,
        this.address.number,
        this.address.postalCode,
        this.address.city,
        this.address.country,
        this.address.longitude,
        this.address.latitude
      );

    let carMod = this.carpoolingService.
    createCar(
      this.car.immatriculation,
      this.car.idUser,
      Number(this.car.placeNb),
    )
    console.log(this.car.placeNb);
    console.log(carMod.placeNb);
    console.log(carMod);

    /*
    this.addresseService.updateAddress(this.userService.userValue.id, addressMod)
      .subscribe(answer => {
        console.log(answer);
      });
    */

    this.carpoolingService.updateCar(this.userService.userValue.id, carMod)
      .subscribe(answer => {
        console.log(answer);
      });
    //Success alert
    this.alertService.success('Vous avez changé ' + this.changedContent[nb]);

    //resets every icons and labels/input
    this.hideElements();

    //petit reload
    //location.reload();

  }

  findDifference(nb: number) {

    this.i = 0;

    switch (nb) {
      case 0 :
        if (this.address.street != this.street.nativeElement.value) {
          this.address.street = this.street.nativeElement.value;
          this.i++;
        }
        break;

      case 1:
        if (this.address.number != this.number.nativeElement.value) {
          this.address.number = this.number.nativeElement.value;
          this.i++;
        }
        break;

      case 2:
        if (this.address.postalCode != this.postalCode.nativeElement.value) {
          this.address.postalCode = this.postalCode.nativeElement.value;
          this.i++;
        }
        break;

      case 3:
        if (this.address.city != this.city.nativeElement.value) {
          this.address.city = this.city.nativeElement.value;
          this.i++;
        }
        break;

      case 4:
        if (this.address.country != this.country.nativeElement.value) {
          this.address.country = this.country.nativeElement.value;
          this.i++;
        }
        break;

      case 5:
        if (this.car.immatriculation != this.immatriculation.nativeElement.value) {
          this.car.immatriculation = this.immatriculation.nativeElement.value;
          this.i++;
        }
        break;

      case 6:
        if (this.car.placeNb != this.placeNb.nativeElement.value) {
          this.car.placeNb = this.placeNb.nativeElement.value;
          this.i++;
        }
        break;
    }

  }

  changeHidden(nb: number) {

    for (let i = 0; i < this.isHidden.length; i++) {
      if (i == nb) {
        this.isHidden[nb] = !this.isHidden[nb];
      } else {
        this.isHidden[i] = false;
      }
    }

  }


  findLocation(address) {
    this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
        // decompose the result

        console.log("ça marche !");
        this.lat = results[0].geometry.location.lat();
        this.long = results[0].geometry.location.lng();
        console.log("Lat" + this.lat + "lng" + this.long);
        this.confirm = true;

      } else {
        alert("Veuillez entrer une adresse correcte.");
        this.confirm = false;
      }
    });

  }

}
