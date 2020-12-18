export interface AddressCarDto {
  idUser?: number;
  street : string;
  number : number;
  postalCode: number;
  city: string;
  country: string;
  longitude: string;
  latitude: string;
  immatriculation : string;
  placeNb : number;

}

export declare type AddressCarList = AddressCarDto[];
