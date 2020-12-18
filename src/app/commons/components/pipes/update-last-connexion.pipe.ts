import { Pipe, PipeTransform } from '@angular/core';
import {LastConnexionDto} from '../../../AdminPanel/types/last-connexion-dto';

@Pipe({
  name: 'updateLastConnexion'
})
export class UpdateLastConnexionPipe implements PipeTransform {

  private _lastConnexion : LastConnexionDto;

  transform(id : number,
            lastConnexion : string): LastConnexionDto {

    this._lastConnexion = {
      iduser : id,
      lastConnexion : lastConnexion
    }
    return this._lastConnexion;
  }

}
