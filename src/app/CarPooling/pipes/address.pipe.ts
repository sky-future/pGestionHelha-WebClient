import { Pipe, PipeTransform } from '@angular/core';
import {Address} from '../types/address';

@Pipe({
  name: 'carPoolingPipe'
})
export class AddressPipe implements PipeTransform {

  private _address : Address

  transform(street: string,
            number : number,
            postalCode : number,
            city: string,
            country : string,
            longitude : string,
            latitude : string): Address {

    this._address = {
      street : street,
      number : number,
      postalCode : postalCode,
      city : city,
      country : country,
      longitude : longitude,
      latitude : latitude
    }

    return this._address;
  }


}
