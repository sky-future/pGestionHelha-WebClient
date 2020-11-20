import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto} from '../DTOs/user-dto';
import {HttpClient} from '@angular/common/http';
import {sha256} from 'js-sha256';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public static readonly AUTH_API_PATH: string = "/api/users/authenticate";
  public static readonly SIGNUP_API_PATH: string = "/api/users";
  public static readonly USER_KEY: string = "currentUser";

  private currentUserSubject: BehaviorSubject<UserDto>;
  public currentUser: Observable<UserDto>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserDto>((JSON.parse(localStorage.getItem(AuthenticationService.USER_KEY))));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():UserDto{
    return this.currentUserSubject.value;
  }

  login(username:string, password:string){
    password = sha256(password);

    let authPath = `${environment.serverAddress}${AuthenticationService.AUTH_API_PATH}`;
    return this.http.post<any>(authPath, {username, password})
      .pipe(map(user => {
        localStorage.setItem(AuthenticationService.USER_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  signUp(user: UserDto){

    user.password = sha256(user.password);
    let signUpPath = `${environment.serverAddress}${AuthenticationService.SIGNUP_API_PATH}`;

    return this.http.post<any>(signUpPath, user)
      .pipe(map(newUser => {
        return newUser;
      })).subscribe();
  }

  logout(){
    localStorage.removeItem(AuthenticationService.USER_KEY);
    this.currentUserSubject.next(null);
  }








}
