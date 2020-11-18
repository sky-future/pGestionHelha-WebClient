import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto, UserList} from '../../../DTOs/user-dto';
import {environment} from '../../../../environments/environment';
import {sha256} from 'js-sha256';
import {UserRegisterRepository} from './user-register-repository';

@Injectable({
  providedIn: 'root'
})
export class UserApiService implements UserRegisterRepository{

  public static URL: string = "/api/users";

  constructor(public http: HttpClient) {
  }

  query(): Observable<UserList> {
    return this.http.get<UserList>(UserApiService.URL);
  }

  post(user: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(environment.serverAddress + UserApiService.URL, user);
  }

  put(user: UserDto): Observable<any> {
    return this.http.put(UserApiService.URL, user);
  }

  create(user: UserDto): Observable<UserDto> {
    return undefined;
  }

  delete(id: number): Observable<any> {
    return undefined;
  }

  update(id: number, user: UserDto): Observable<any> {
    return undefined;
  }

  // //TODO importer DTO
  // putPassword(pwd: PasswordDTO): Observable<any>{
  //   pwd.passwordOld = sha256(pwd.passwordOld);
  //   pwd.passwordNew = sha256(pwd.passwordNew);
  //   return this.http.put(UserService.URL + "/password", pwd);
  // }
  //
  // putMail(mail: MailDTO): Observable<any>{
  //   return  this.http.put(UserService.URL + "/mail", mail);
  // }
  //
  // delete(id: number): Observable<any> {
  //   return this.http.delete(`${UserService.URL}/${id}`);
  // }
}
