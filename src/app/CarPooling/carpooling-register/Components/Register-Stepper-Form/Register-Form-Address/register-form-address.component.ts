import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Address} from '../../../../types/address';
import {CarPoolingService} from '../../../../repositories/car-pooling.service';
import {AddressPipe} from '../../../../pipes/address.pipe';
import {CarDto} from '../../../../types/car-dto';
import {CreateCarPipe} from '../../../../pipes/create-car.pipe';
import {UserService} from '../../../../../services/user.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-register-form-address',
  templateUrl: './register-form-address.component.html',
  styleUrls: ['./register-form-address.component.css']
})
export class RegisterFormAddressComponent implements OnInit {

  private address: Address;
  private car: CarDto;
  addressFormGroup: FormGroup;
  geocoder: any;
  lat : number;
  long: number;
  confirm : boolean;


  constructor(
    private _formBuilder: FormBuilder,
    private carPoolingService: CarPoolingService,
    private userService : UserService,
    private router : Router

  ) {
  }

  ngOnInit(): void {
    this.addressFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      immatriculation: ['', Validators.required],
      placesDispo: ['', Validators.required]
    })

  }

  onRegisterAddressSubmit() {

    let street = this.addressFormGroup.value.street;
    let number = this.addressFormGroup.value.number;
    let postalCode = this.addressFormGroup.value.postalCode;
    let city = this.addressFormGroup.value.city;

    let addressGeocode = street + "," + number + "," + postalCode + "," + city;

    //Methode to geocode address
    this.findLocation(addressGeocode);

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
        this.restMethode();
        this.addressFormGroup.reset();
        this.router.navigateByUrl('/home')

      } else {
        alert("Veuillez entrer une adresse correcte.");
        this.confirm = false;
        this.addressFormGroup.reset();
      }
    })
  }

  //Créé car la requête vers google prend trop de temps par rapport à l'éxécution en local du code
  // Ce qui engendre des variables sans aucune valeur.
  restMethode(){

    do{

      //Convert my lat and long to string to correspond to backend
      let long =  this.lat.toString();
      let lat = this.long.toString();


      this.address = new AddressPipe().transform(
        this.addressFormGroup.value.street,
        this.addressFormGroup.value.number,
        this.addressFormGroup.value.postalCode,
        this.addressFormGroup.value.city,
        this.addressFormGroup.value.country,
        lat,
        long
      )


      let connectedUserID = this.userService.userValue.id;


      this.car = new CreateCarPipe().transform(
        this.addressFormGroup.value.immatriculation,
        connectedUserID,
        this.addressFormGroup.value.placesDispo)

      console.log(this.car);

      this.carPoolingService.postAddress(this.address)
        .subscribe();

        this.carPoolingService.postCar(this.car)
          .subscribe();

    }while (this.confirm = false)

  }

}
