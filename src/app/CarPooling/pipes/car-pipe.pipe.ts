import { Pipe, PipeTransform } from '@angular/core';
import {CarOutput} from '../types/car-output';


@Pipe({
  name: 'carPipe'
})
export class CarPipePipe implements PipeTransform {

  private _car : CarOutput

  transform(immatriculation : string, idUser : number, placeNb : number): CarOutput {
    this._car = {
      immatriculation : immatriculation,
      idUser : idUser,
      placeNb : placeNb
    }
    return  this._car;
  }

}
