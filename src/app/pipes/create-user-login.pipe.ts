import { Pipe, PipeTransform } from '@angular/core';
import {UserPost} from '../DTOs/user-post';
import {UserAuthenticateDto} from '../DTOs/user-authenticate-dto';

@Pipe({
  name: 'createUserLogin'
})
export class CreateUserLoginPipe implements PipeTransform {

  private _user: UserAuthenticateDto;

  transform(email: string, password: string): UserAuthenticateDto {
    this._user = {
      mail: email,
      password: password
    }
    return this._user;
  }

}
