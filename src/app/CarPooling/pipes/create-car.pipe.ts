import { Pipe, PipeTransform } from '@angular/core';
import {CarDto} from '../types/car-dto';

@Pipe({
  name: 'CreateCarPipe'
})
export class CreateCarPipe implements PipeTransform {

  private _car: CarDto;

  transform(immat: string, idUser: number, placesnb : number): CarDto {

    this._car = {
      immatriculation : immat,
      idUser : idUser,
      placeNb : placesnb
    }
    return this._car;
  }

}
