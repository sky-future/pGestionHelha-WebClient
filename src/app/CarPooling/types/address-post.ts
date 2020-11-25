export interface AddressPost {
  street : string;
  number : number;
  postalCode: number;
  city: string;
  country: string;
  longitude: string;
  latitude: string;
}

export declare type AddressList = AddressPost[];
