import { Injectable } from '@angular/core';
import {UserAuthenticateDto} from '../DTOs/user-authenticate-dto';
import {CreateUserPipe} from '../pipes/create-user.pipe';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto} from '../DTOs/user-dto';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserPost} from '../DTOs/user-post';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {UserAuthenticateDtoOutput} from '../DTOs/user-authenticate-dto-output';
import {CreateUserLoginPipe} from '../pipes/create-user-login.pipe';
import {ProfileDtoOutput} from '../DTOs/profile-dto-output';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<UserAuthenticateDtoOutput>;
  public user: Observable<UserAuthenticateDtoOutput>;
  private URL: string = 'api/users';
  private URLLogin: string = 'api/users/authenticate';

  constructor(private http: HttpClient, private router: Router) {
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
    //Todo créer une route pour ne pas finir sur une page blanche
    this.router.navigate(['']);
  }
}
