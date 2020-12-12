export interface AddressCarDto {
  id?: number;
  street : string;
  number : number;
  postalCode: number;
  city: string;
  country: string;
  longitude: string;
  latitude: string;
  immatriculation : string;
  idUser : number;
  placeNb : number;

}

export declare type AddressCarList = AddressCarDto[];
