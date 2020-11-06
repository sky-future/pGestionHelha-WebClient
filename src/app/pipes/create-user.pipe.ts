import { Pipe, PipeTransform } from '@angular/core';
import {UserDto} from '../DTOs/user-dto';

@Pipe({
  name: 'createUser'
})
export class CreateUserPipe implements PipeTransform {

  private _user: UserDto;

  transform(mail: string, password: string): UserDto {
    this._user = {
      mail: mail,
      password: password,
      lastConnexion: "test",
      admin: false
    }
    return this._user;
  }

}
