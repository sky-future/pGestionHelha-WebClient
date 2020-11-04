import {Observable} from 'rxjs';
import {UserDto, UserList} from '../DTOs/user-dto';


//interface pour la dto de user
export interface UserRegisterRepository {
  query(): Observable<UserList>;

  create(user: UserDto):Observable<UserDto>;

  delete(id: number): Observable<any>;

  update(id: number, user: UserDto): Observable<any>;
}
