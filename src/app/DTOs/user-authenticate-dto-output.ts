export interface UserAuthenticateDtoOutput {
  id : number;
  mail : string;
  password : string;
  lastConnexion : string;
  admin : boolean;
  token : string;
}

export declare type UsersList = UserAuthenticateDtoOutput[];
