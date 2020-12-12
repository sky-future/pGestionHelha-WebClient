import { Pipe, PipeTransform } from '@angular/core';
import {PasswordDto} from '../types/password-dto';

@Pipe({
  name: 'passwordTransform'
})
export class PasswordTransformPipe implements PipeTransform {

  private _passwordDTO: PasswordDto;

  transform( idUser : number,
             PasswordNew : string,
             PasswordOld : string): PasswordDto {

    this._passwordDTO = {
      idUser : idUser,
      PasswordNew : PasswordNew,
      PasswordOld : PasswordOld
    }
    return this._passwordDTO;
  }

}
