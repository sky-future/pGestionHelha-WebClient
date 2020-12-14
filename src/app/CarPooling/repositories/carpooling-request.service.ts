import { Injectable } from '@angular/core';
import {CarpoolingRequestDto} from '../types/carpooling-request-dto';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarpoolingRequestService {

  private RequestSubject : BehaviorSubject<CarpoolingRequestDto>;
  private request : Observable<CarpoolingRequestDto>;

  public URl: string = environment.serverAddress + 'api/request';

  constructor(public http: HttpClient) {
    this.RequestSubject = new BehaviorSubject<CarpoolingRequestDto>(JSON.parse(localStorage.getItem('request')));
    this.request = this.RequestSubject.asObservable();
  }

  public queryRequestByIdUser(IdUser): Promise<CarpoolingRequestDto>{
    return this.http.get<CarpoolingRequestDto>(this.URl + '/' + IdUser).toPromise();
  }

}
