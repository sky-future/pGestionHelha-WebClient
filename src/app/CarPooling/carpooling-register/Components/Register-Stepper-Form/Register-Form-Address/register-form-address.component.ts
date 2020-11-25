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

  constructor(
    private _formBuilder: FormBuilder,
    public addressService : CarPoolingService,
    public carService : CarApiService
    ) { }

  ngOnInit(): void {
    this.addressFormGroup = this._formBuilder.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        postalCode: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        longitude: ['', Validators.required],
        latitude: ['', Validators.required],
        immatriculation : ['', Validators.required],
        placesDispo: ['', Validators.required]
    })

  }

  onRegisterAddressSubmit() {

    this.address = new AddressPipe().transform(
      this.addressFormGroup.value.street,
      this.addressFormGroup.value.number,
      this.addressFormGroup.value.postalCode,
      this.addressFormGroup.value.city,
      this.addressFormGroup.value.country,
      this.addressFormGroup.value.longitude,
      this.addressFormGroup.value.latitude
    )

    this.car = new CreateCarPipe().transform(
      this.addressFormGroup.value.immatriculation,
      this.addressFormGroup.value.placesDispo
    )

    this.addressService.postAddress(this.address)
      .subscribe();

    this.carService.post(this.car)
      .subscribe();

  }
}
