export interface CarAddDtoOutput {
  id : number;
  immatriculation : string;
  idUser : number;
  placeNb : number;
}

export declare type CarsList = CarAddDtoOutput[];
