import { Pipe, PipeTransform } from '@angular/core';
import {CarAddDto} from '../../DTOs/car-add-dto';

@Pipe({
  name: 'CreateCarPipe'
})
export class CreateCarPipe implements PipeTransform {

  private _car: CarAddDto;

  transform(immat: string, placesnb : number): CarAddDto {
    let iduser = 32;
    this._car = {
      immatriculation : immat,
      idUser : iduser,
      placeNb : placesnb
    }
    return this._car;
  }

}
