import { Injectable } from '@angular/core';
import {UserRegisterRepository} from '../interfaces/user-register-repository';
import {UserDto, UserList} from '../DTOs/user-dto';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterApiService implements UserRegisterRepository{
  private static URL: string = environment.serverAddress + 'api/users'; //a modifier en fonction de la db

  constructor(private http:HttpClient) {

  }

  create(user: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(UserRegisterApiService.URL, user);
    console.warn('tentative ajout:', user);
  }

  delete(id: number): Observable<any> {
    return undefined;
  }

  query(): Observable<UserList> {
    return this.http.get<UserList>(UserRegisterApiService.URL);
  }

  update(id: number, user: UserDto): Observable<any> {
    return undefined;
  }
}
