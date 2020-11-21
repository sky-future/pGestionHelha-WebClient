import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserDto} from '../DTOs/user-dto';
import {HttpClient} from '@angular/common/http';
import {sha256} from 'js-sha256';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RegisterModalComponent} from '../commons/components/register/register-modal/register-modal.component';
import {LoginModalComponent} from '../commons/components/login/login-modal/login-modal.component';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public static readonly AUTH_API_PATH: string = '/api/users/authenticate';
  public static readonly SIGNUP_API_PATH: string = '/api/users';
  public static readonly USER_KEY: string = 'currentUser';

  //Login modal
  loginModalRef: MatDialogRef<LoginModalComponent>;

  //Register modal
  registerModalRef: MatDialogRef<RegisterModalComponent>;

  private currentUserSubject: BehaviorSubject<UserDto>;
  public currentUser: Observable<UserDto>;

  constructor(private http: HttpClient,
              private dialog: MatDialog) {
    this.currentUserSubject = new BehaviorSubject<UserDto>((JSON.parse(localStorage.getItem(AuthenticationService.USER_KEY))));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  //Modal code

  //Opens the login modal and closes register if opened
  openLoginModal(): void {

    this.loginModalRef = this.dialog.open(LoginModalComponent, {panelClass: 'login-dialog'});

    //Closes if open
    if (this.registerModalRef) {
      this.closeRegisterModal();
    }

  }

  //Opens the register modal and closes login if opened
  openRegisterModal(): void {

    this.registerModalRef = this.dialog.open(RegisterModalComponent, {panelClass: 'register-dialog'});

    //Closes if open
    if (this.loginModalRef) {
      this.closeLoginModal();
    }

  }

  //Closes the login modal
  closeLoginModal(): void {
    this.loginModalRef.close();
  }

  //Closes the register modal
  closeRegisterModal(): void {
    this.registerModalRef.close();
  }

  //End modal code



  public get currentUserValue(): UserDto {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    password = sha256(password);

    let authPath = `${environment.serverAddress}${AuthenticationService.AUTH_API_PATH}`;
    return this.http.post<any>(authPath, {username, password})
      .pipe(map(user => {
        localStorage.setItem(AuthenticationService.USER_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  signUp(user: UserDto) {

    user.password = sha256(user.password);
    let signUpPath = `${environment.serverAddress}${AuthenticationService.SIGNUP_API_PATH}`;

    return this.http.post<any>(signUpPath, user)
      .pipe(map(newUser => {
        return newUser;
      })).subscribe();
  }

  logout() {
    localStorage.removeItem(AuthenticationService.USER_KEY);
    this.currentUserSubject.next(null);
  }


}
