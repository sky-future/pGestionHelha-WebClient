import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddressPost} from '../../../../types/address-post';
import {CarPoolingService} from '../../../../repositories/car-pooling.service';
import {AddressPipe} from '../../../../pipes/address.pipe';
import {CarAddDto} from '../../../../../DTOs/car-add-dto';
import {CreateCarPipe} from '../../../../pipes/create-car.pipe';
import {CarApiService} from '../../../../../commons/components/repositories/car-api.service';


@Component({
  selector: 'app-register-form-address',
  templateUrl: './register-form-address.component.html',
  styleUrls: ['./register-form-address.component.css']
})
export class RegisterFormAddressComponent implements OnInit {

  private address: AddressPost;
  private car: CarAddDto;
  addressFormGroup: FormGroup;
  geocoder: any;
  lat : number;
  long: number;

  constructor(
    private _formBuilder: FormBuilder,
    public addressService: CarPoolingService,
    public carService: CarApiService
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

    var street = this.addressFormGroup.value.street;
    var number = this.addressFormGroup.value.number;
    var postalCode = this.addressFormGroup.value.postalCode;
    var city = this.addressFormGroup.value.city;

    var addressGeocode = street + "," + number + "," + postalCode + "," + city;

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
        this.restMethode();
      } else {
        alert("Sorry, this search produced no results.");
      }
    })
  }

  restMethode(){

    //Convert my lat and long to string to correspond to backend
    var lat = this.lat.toString();
    var long = this.long.toString();


    this.address = new AddressPipe().transform(
      this.addressFormGroup.value.street,
      this.addressFormGroup.value.number,
      this.addressFormGroup.value.postalCode,
      this.addressFormGroup.value.city,
      this.addressFormGroup.value.country,
      lat,
      long
    )

    this.car = new CreateCarPipe().transform(
      this.addressFormGroup.value.immatriculation,
      this.addressFormGroup.value.placesDispo)

    console.log(this.address);

    this.addressService.postAddress(this.address)
      .subscribe();
    //
    // this.carService.post(this.car)
    //   .subscribe();
  }

}
