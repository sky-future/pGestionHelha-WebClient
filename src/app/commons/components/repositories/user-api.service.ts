import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto, UserList} from '../../../DTOs/user-dto';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  public static URL: string = 'api/users'; // vérifier les slashs

  constructor(public http: HttpClient) {
  }

  // convenience getter for easy access to form fields

  query(): Observable<UserList> {
    return this.http.get<UserList>(UserApiService.URL);
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

}
