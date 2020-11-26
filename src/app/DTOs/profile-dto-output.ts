export interface ProfileDtoOutput {
  id : number;
  lastname : string;
  firstname : string;
  matricule : string;
  telephone : string;
  descript : string;
  idUser : number;

}

export declare type profileList = ProfileDtoOutput[];

