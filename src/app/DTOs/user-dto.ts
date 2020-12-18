export interface UserDto {
  id?: number;
  mail: string;
  password: string;
  lastConnexion: string;
  admin?: boolean;
  token?: string;
}
//permet de créer notre propre type
export declare type UserList = UserDto[];
