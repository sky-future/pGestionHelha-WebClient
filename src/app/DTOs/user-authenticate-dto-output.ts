export interface UserAuthenticateDtoOutput {
  id : number;
  mail : string;
  password : string;
  lastConnexion : string;
  admin : boolean;
  token : string;
  profile : number;

}

export declare type UsersList = UserAuthenticateDtoOutput[];
