import { Pipe, PipeTransform } from '@angular/core';
import {UserDto} from '../../DTOs/user-dto';

@Pipe({
  name: 'adminPanel'
})
export class AdminPanelPipe implements PipeTransform {

  private _userDto : UserDto

  transform(idUser : number,
            mail : string,
            password : string,
            lastConnexion : string,
            admin : boolean): UserDto {

    this._userDto = {
      id : idUser,
      mail : mail,
      password : password,
      lastConnexion : lastConnexion,
      admin : admin

    }
    return this._userDto;
  }

}
