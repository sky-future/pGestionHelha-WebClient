import { Pipe, PipeTransform } from '@angular/core';
import {UserPost} from '../DTOs/user-post';

@Pipe({
  name: 'createUser'
})
export class CreateUserPipe implements PipeTransform {

  private _user: UserPost;

  transform(email: string, password: string): UserPost {
    this._user = {
      mail: email,
      password: password,
      lastConnexion: "Today",

    }
    return this._user;
  }

}
