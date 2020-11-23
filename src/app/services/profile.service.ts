import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserAuthenticateDtoOutput} from '../DTOs/user-authenticate-dto-output';
import {ProfileDtoOutput} from '../DTOs/profile-dto-output';
import {UserPost} from '../DTOs/user-post';
import {CreateUserPipe} from '../pipes/create-user.pipe';
import {UserAuthenticateDto} from '../DTOs/user-authenticate-dto';
import {CreateUserLoginPipe} from '../pipes/create-user-login.pipe';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProfileDto} from '../DTOs/profile-dto';
import {CreateProfilePipe} from '../pipes/create-profile.pipe';
import {UserDto} from '../DTOs/user-dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileSubject: BehaviorSubject<ProfileDtoOutput>;
  public profile: Observable<ProfileDtoOutput>;
  private URL: string = 'api/profile';

  constructor(private http: HttpClient, private router: Router) {

    this.profileSubject = new BehaviorSubject<ProfileDtoOutput>(JSON.parse(localStorage.getItem('profile')));
    this.profile = this.profileSubject.asObservable();

  }

  public get profileValue(): ProfileDtoOutput {
    return this.profileSubject.value;
  }

  public createProfile(lastname: string, firstname: string, matricule: string, telephone: string, descript: string): ProfileDto {
    return new CreateProfilePipe().transform(lastname, firstname, matricule, telephone, descript);
  }

  registerProfile(profile: ProfileDto): Observable<ProfileDto> {
    return this.http.post<ProfileDto>(environment.serverAddress + this.URL, profile);
  }

}
