export interface AddresseGetDtoOutput {
  id : number;
  street : string;
  number : number;
  postalCode : number;
  city : string;
  country: string;
  longitude : string;
  latitude : string;
}

export declare type addressList = AddresseGetDtoOutput[];
