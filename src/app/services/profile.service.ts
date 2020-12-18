import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProfileDtoOutput} from '../DTOs/profile-dto-output';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ProfileDto} from '../DTOs/profile-dto';
import {CreateProfilePipe} from '../pipes/create-profile.pipe';
import {environment} from '../../environments/environment';
import {UserService} from './user.service';
import {UserDto} from '../DTOs/user-dto';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileSubject: BehaviorSubject<ProfileDtoOutput>;
  public profile: Observable<ProfileDtoOutput>;
  private user: UserDto;
  private URL: string = 'api/profile';

  constructor(private http: HttpClient,
              private router: Router,
              private userService: UserService) {

    this.profileSubject = new BehaviorSubject<ProfileDtoOutput>(JSON.parse(localStorage.getItem('profile')));
    this.profile = this.profileSubject.asObservable();

  }


  public getProfile(): Observable<ProfileDtoOutput> {
    return this.http.get<ProfileDtoOutput>(environment.serverAddress + this.URL + '/' + this.userService.userValue.id + '/profile');
  }

  public updateProfile(profile: ProfileDtoOutput): Observable<any> {
    return this.http.put<ProfileDto>(environment.serverAddress + this.URL + '/' + profile.id, profile);
  }

  public createProfile(lastname: string, firstname: string, matricule: string, telephone: string, descript: string, idUser: number): ProfileDto {
    return new CreateProfilePipe().transform(lastname, firstname, matricule, telephone, descript, idUser);
  }

  public createProfileOutput(id: number, lastname: string, firstname: string, matricule: string, telephone: string, descript: string, idUser: number): ProfileDtoOutput {
    return new CreateProfilePipe().transformOutput(id, lastname, firstname, matricule, telephone, descript, idUser);
  }

  registerProfile(profile: ProfileDto): Observable<ProfileDto> {
    return this.http.post<ProfileDto>(environment.serverAddress + this.URL, profile);
  }

  public getProfilByIdUser(idUser: number): Promise<ProfileDtoOutput>{
    return this.http.get<ProfileDtoOutput>(environment.serverAddress + this.URL + '/' + idUser + '/profile').toPromise();
  }


}
