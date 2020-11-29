import { Pipe, PipeTransform } from '@angular/core';
import {UserPost} from '../DTOs/user-post';
import {UserAuthenticateDto} from '../DTOs/user-authenticate-dto';
import {ProfileDtoOutput} from '../DTOs/profile-dto-output';

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
