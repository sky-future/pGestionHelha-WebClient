import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto, UserList} from '../../../DTOs/user-dto';
import {environment} from '../../../../environments/environment';
import {sha256} from 'js-sha256';
import {UserRegisterRepository} from './user-register-repository';
import {FormBuilder, Validators} from '@angular/forms';
import {UserPost} from '../../../DTOs/user-post';
import {CreateUserPipe} from '../../../pipes/create-user.pipe';

@Injectable({
  providedIn: 'root'
})
export class UserApiService implements UserRegisterRepository {

  patternPwd: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$';
  patternMail: string = '^\\S+@\\S+$';
  public static URL: string = 'api/users'; // vérifier les slashs
  user;


  constructor(public http: HttpClient,
              public fb: FormBuilder) {
  }

  formModel = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.patternMail)]],
    password: ['', [Validators.required, Validators.pattern(this.patternPwd)]],
    confirmPassword: ['', Validators.required]
  });


  private createUser() : UserPost
  {
    return new CreateUserPipe().transform(this.formModel.value.email,this.formModel.value.password);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.formModel.controls;
  }


  query(): Observable<UserList> {
    return this.http.get<UserList>(UserApiService.URL);
  }

  post(): Observable<UserDto> {
    this.user = this.createUser();
    return this.http.post<UserDto>(environment.serverAddress + UserApiService.URL, this.user);
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
