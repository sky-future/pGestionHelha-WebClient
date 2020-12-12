
export interface UserAuthenticateDto {
  mail : string;
  password : string;
  profile : number;
}

export declare type UsersList = UserAuthenticateDto[];
