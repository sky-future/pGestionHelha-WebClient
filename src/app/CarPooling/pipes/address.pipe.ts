import { Pipe, PipeTransform } from '@angular/core';
import {AddressPost} from '../types/address-post';
import {count} from 'rxjs/operators';

@Pipe({
  name: 'carPoolingPipe'
})
export class AddressPipe implements PipeTransform {

  private _address : AddressPost

  transform(street: string,
            number : number,
            postalCode : number,
            city: string,
            country : string,
            longitude : string,
            latitude : string): AddressPost {

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
