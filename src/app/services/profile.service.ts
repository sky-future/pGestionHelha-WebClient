import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserAuthenticateDtoOutput} from '../DTOs/user-authenticate-dto-output';
import {ProfileDtoOutput} from '../DTOs/profile-dto-output';
import {UserPost} from '../DTOs/user-post';
import {CreateUserPipe} from '../pipes/create-user.pipe';
import {UserAuthenticateDto} from '../DTOs/user-authenticate-dto';
import {CreateUserLoginPipe} from '../pipes/create-user-login.pipe';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProfileDto} from '../DTOs/profile-dto';
import {CreateProfilePipe} from '../pipes/create-profile.pipe';
import {UserDto} from '../DTOs/user-dto';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';
import {first, map} from 'rxjs/operators';
import {JwtInterceptor} from '../helpers/jwt.interceptor';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileSubject: BehaviorSubject<ProfileDtoOutput>;
  public profile: Observable<ProfileDtoOutput>;
  private URL: string = 'api/profile';

  constructor(private http: HttpClient,
              private router: Router,
              private userService : UserService) {

    this.profileSubject = new BehaviorSubject<ProfileDtoOutput>(JSON.parse(localStorage.getItem('profile')));
    this.profile = this.profileSubject.asObservable();

  }

  public getProfile() : Observable<ProfileDtoOutput>{
    return this.http.get<ProfileDtoOutput>(environment.serverAddress + this.URL + "/3");
  }

  public updateProfile(profile : ProfileDto) : Observable<any>{
    return this.http.put<ProfileDto>(environment.serverAddress + this.URL + "/3", profile);
  }

  public createProfile(lastname: string, firstname: string, matricule: string, telephone: string, descript: string): ProfileDto {
    return new CreateProfilePipe().transform(lastname, firstname, matricule, telephone, descript);
  }

  registerProfile(profile: ProfileDto): Observable<ProfileDto> {
    return this.http.post<ProfileDto>(environment.serverAddress + this.URL, profile);
  }

}
