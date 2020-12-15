import { Pipe, PipeTransform } from '@angular/core';
import {Confirmation} from '../types/confirmation';


@Pipe({
  name: 'confirmation'
})
export class ConfirmationPipe implements PipeTransform {

  private _request : Confirmation;

  transform(idRequestSender : number, idRequestReceiver : number, confirmation : number ): Confirmation {
    this._request = {
      idRequestSender : idRequestSender,
      idRequestReceiver : idRequestReceiver,
      confirmation : confirmation
    }
    return this._request;
  }

}
