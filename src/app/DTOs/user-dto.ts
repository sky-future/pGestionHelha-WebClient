export interface UserDto {
  idUser?:number;
  firstName:string;
  lastName: string;
  mail: string;
  password: string;
}
//permet de créer notre propre type
export declare type UserList = UserDto[];
