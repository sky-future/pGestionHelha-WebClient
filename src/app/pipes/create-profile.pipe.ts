import {Pipe, PipeTransform} from '@angular/core';
import {ProfileDto} from '../DTOs/profile-dto';

@Pipe({
  name: 'createProfile'
})
export class CreateProfilePipe implements PipeTransform {

  private _profile: ProfileDto;

  transform(lastname: string, firstname: string, matricule: string, telephone: string, descript: string): ProfileDto {
    this._profile = {
      lastname: lastname,
      firstname: firstname,
      matricule: matricule,
      telephone: telephone,
      descript: descript
    };
    return this._profile;
  }

}
