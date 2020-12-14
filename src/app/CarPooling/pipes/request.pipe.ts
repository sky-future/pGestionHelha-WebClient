import { Pipe, PipeTransform } from '@angular/core';
import {RequestItem} from '../../commons/components/types/request-item';

@Pipe({
  name: 'request'
})
export class RequestPipe implements PipeTransform {

  private _request : RequestItem;

  transform(id : number, firstname : string, lastname : string, telephone : number, idRequest : number, confirmation : number): RequestItem {
    this._request= {
      id : id,
      firstname : firstname,
      lastname : lastname,
      telephone : telephone,
      idRequest : idRequest,
      confirmation : confirmation
    }
    return this._request;
  }

}
