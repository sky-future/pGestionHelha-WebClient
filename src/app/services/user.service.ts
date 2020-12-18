import { Injectable } from '@angular/core';
import {UserAuthenticateDto} from '../DTOs/user-authenticate-dto';
import {CreateUserPipe} from '../pipes/create-user.pipe';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto, UserList} from '../DTOs/user-dto';
import {HttpClient} from '@angular/common/http';
import {UserPost} from '../DTOs/user-post';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {UserAuthenticateDtoOutput} from '../DTOs/user-authenticate-dto-output';
import {CreateUserLoginPipe} from '../pipes/create-user-login.pipe';
import {PasswordDto} from '../commons/components/types/password-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<UserAuthenticateDtoOutput>;
  public user: Observable<UserAuthenticateDtoOutput>;
  private URL: string = 'api/users';
  private URLLogin: string = 'api/users/authenticate';
  private URLPASSWORDCHANGE = 'api/users/pwd';
  private URL_ADD_ADMIN_USER = 'api/users/admin';
  private URL_DELETE_USER_BY_ID = 'api/users';
  private URLLASTCONNEXION_CHANGE = 'api/users/lastconnexion';

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UserAuthenticateDtoOutput>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): UserAuthenticateDtoOutput {
      return this.userSubject.value;
  }

  public createUser(email:string, password:string) : UserPost
  {
    return new CreateUserPipe().transform(email,password);
  }

  public createUserLogin(email:string, password:string) : UserAuthenticateDto
  {
    return new CreateUserLoginPipe().transform(email,password,0);
  }

  register(user:UserPost): Observable<UserDto> {
    return this.http.post<UserDto>(environment.serverAddress + this.URL, user);
  }

  login(userAuth:UserAuthenticateDto) {
    return this.http.post<UserAuthenticateDto>(environment.serverAddress + this.URLLogin, userAuth)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(<UserAuthenticateDtoOutput> user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    //this.router.navigate(['']);
  }

  public updateLastconnexion(id : number){
    return this.http.patch(environment.serverAddress + this.URLLASTCONNEXION_CHANGE + "/" + id, null);
  }

  updatePassword(data): Observable<PasswordDto>{
    return this.http.patch<PasswordDto>(environment.serverAddress + this.URLPASSWORDCHANGE, data);
  }

  public getUsers(): Promise<UserList>{
    return this.http.get<UserList>(environment.serverAddress + this.URL).toPromise();
  }

  public createAdminUser(user : UserDto): Promise<UserDto>{
    return this.http.post<UserDto>(environment.serverAddress + this.URL_ADD_ADMIN_USER, user).toPromise();
  }

  public deleteUserById (idUsertoDelete : number){
    return this.http.delete(environment.serverAddress + this.URL_DELETE_USER_BY_ID + "/" + idUsertoDelete );
  }

  public getUserById(idUsertoGet : number) : Observable<UserDto>{
    return this.http.get<UserDto>(environment.serverAddress + this.URL + "/" + idUsertoGet);
  }

  public updateUserById(idUsertoUpdate, user) : Observable<UserDto>{
    return this.http.put<UserDto>(environment.serverAddress + this.URL + "/" + idUsertoUpdate, user);
  }
}
