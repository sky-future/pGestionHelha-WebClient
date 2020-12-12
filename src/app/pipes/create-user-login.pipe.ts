import { Pipe, PipeTransform } from '@angular/core';
import {UserAuthenticateDto} from '../DTOs/user-authenticate-dto';

@Pipe({
  name: 'createUserLogin'
})
export class CreateUserLoginPipe implements PipeTransform {

  private _user: UserAuthenticateDto;

  transform(email: string, password: string,   profile : number): UserAuthenticateDto {
    this._user = {
      mail: email,
      password: password,
      profile : profile

    }
    return this._user;
  }

}
