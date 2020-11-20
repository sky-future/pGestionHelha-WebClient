//Information besoin
export interface UserPost {
  mail: string;
  password: string;
  lastConnexion: string;
}

//permet de créer notre propre type
export declare type UserList = UserPost[];

