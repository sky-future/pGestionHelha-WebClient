import { Injectable } from '@angular/core';
import {CarpoolingRequestDto} from '../types/carpooling-request-dto';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RequestItem} from '../../commons/components/types/request-item';
import {RequestPipe} from '../pipes/request.pipe';


@Injectable({
  providedIn: 'root'
})
export class CarpoolingRequestService {

  private RequestSubject : BehaviorSubject<CarpoolingRequestDto>;
  private request : Observable<CarpoolingRequestDto>;

  public URl: string = environment.serverAddress + 'api/requestCarpooling';

  constructor(public http: HttpClient) {
    this.RequestSubject = new BehaviorSubject<CarpoolingRequestDto>(JSON.parse(localStorage.getItem('request')));
    this.request = this.RequestSubject.asObservable();
  }

  public queryRequestByIdUser(IdUser): Promise<CarpoolingRequestDto>{
    return this.http.get<CarpoolingRequestDto>(this.URl + '/' + IdUser).toPromise();
  }

  public createRequestItem(id : number, firstname : string, lastname : string, telephone : number, idRequest : number, confirmation : number) : RequestItem {
    return new RequestPipe().transform(id , firstname , lastname , telephone, idRequest , confirmation );
  }

  public delete(idSender : number, idReceiver : number){
    console.log(idSender,idReceiver);
    alert(idSender);
    alert(idReceiver);
    return this.http.delete(this.URl+ '/' +idSender + '/' + idReceiver).subscribe((ok) => {console.log(ok)});
  }

}
