import { Pipe, PipeTransform } from '@angular/core';
import {AddressCarDto} from '../types/address-car-dto';

@Pipe({
  name: 'carPoolingPipe'
})
export class AddresscarPipe implements PipeTransform {

  private _addresscarDTO : AddressCarDto

  transform(street: string,
            number : number,
            postalCode : number,
            city: string,
            country : string,
            longitude : string,
            latitude : string,
            immatriculation : string,
            idUser : number,
            placeNB : number): AddressCarDto {

    this._addresscarDTO = {
      street : street,
      number : number,
      postalCode : postalCode,
      city : city,
      country : country,
      longitude : longitude,
      latitude : latitude,
      immatriculation : immatriculation,
      idUser : idUser,
      placeNb : placeNB
    }

    return this._addresscarDTO;
  }


}
