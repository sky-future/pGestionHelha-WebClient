import { Pipe, PipeTransform } from '@angular/core';
import {AddressOutput} from '../types/address-output';

@Pipe({
  name: 'addresseOutput'
})
export class AddresseOutputPipe implements PipeTransform {

  private _address : AddressOutput;

  transform(street : string, number : number, postalCode : number, city : string, country : string, longitude : string, latitude : string): AddressOutput {
    this._address= {
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
