import { Pipe, PipeTransform } from '@angular/core';
import {CarPoolingRequestDto} from '../types/car-pooling-request-dto';

@Pipe({
  name: 'requestcarpooling'
})
export class RequestcarpoolingPipe implements PipeTransform {

  private _carPoolingRequestDto : CarPoolingRequestDto;

  //TODO change confirmation value
  transform(idRequestSender : number,
            idRequestReceiver : number,
            confirmation : number): CarPoolingRequestDto {

    this._carPoolingRequestDto = {
      idRequestSender : idRequestSender,
      idRequestReceiver : idRequestReceiver,
      confirmation : confirmation
    }

    return this._carPoolingRequestDto;
  }

}
