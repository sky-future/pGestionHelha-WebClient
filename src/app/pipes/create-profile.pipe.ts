import {Pipe, PipeTransform} from '@angular/core';
import {ProfileDto} from '../DTOs/profile-dto';
import {ProfileDtoOutput} from '../DTOs/profile-dto-output';

@Pipe({
  name: 'createProfile'
})
export class CreateProfilePipe implements PipeTransform {

  private _profile: ProfileDto;
  private _profileOutput : ProfileDtoOutput

  transform(lastname: string, firstname: string, matricule: string, telephone: string, descript: string, idUser:number): ProfileDto {
    this._profile = {
      lastname: lastname,
      firstname: firstname,
      matricule: matricule,
      telephone: telephone,
      descript: descript,
      idUser: idUser,
    };
    return this._profile;
  }

  transformOutput(id : number, lastname: string, firstname: string, matricule: string, telephone: string, descript: string, idUser:number): ProfileDtoOutput {
    this._profileOutput = {
      id:id,
      lastname: lastname,
      firstname: firstname,
      matricule: matricule,
      telephone: telephone,
      descript: descript,
      idUser: idUser,
    };
    return this._profileOutput;
  }

}
