import { Injectable } from '@angular/core';
import {CarpoolingRequestDto} from '../types/carpooling-request-dto';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {RequestItem} from '../../commons/components/types/request-item';
import {RequestPipe} from '../pipes/request.pipe';
import {NULL_EXPR} from '@angular/compiler/src/output/output_ast';
import {Confirmation} from '../types/confirmation';
import {ConfirmationPipe} from '../pipes/confirmation.pipe';
import {UserService} from '../../services/user.service';




@Injectable({
  providedIn: 'root'
})
export class CarpoolingRequestService {

  private RequestSubject : BehaviorSubject<CarpoolingRequestDto>;
  private request : Observable<CarpoolingRequestDto>;

  public URl: string = environment.serverAddress + 'api/requestCarpooling';

  constructor(public http: HttpClient, private userService : UserService) {
    this.RequestSubject = new BehaviorSubject<CarpoolingRequestDto>(JSON.parse(localStorage.getItem('request')));
    this.request = this.RequestSubject.asObservable();
  }

  public queryRequestByIdUser(IdUser): Promise<CarpoolingRequestDto>{
    return this.http.get<CarpoolingRequestDto>(this.URl + '/' + IdUser).toPromise();
  }

  public querySenderByIdUser() : Promise<CarpoolingRequestDto>{
    return this.http.get<CarpoolingRequestDto>(this.URl + '/' + this.userService.userValue.id + '/sender').toPromise();
  }

  public createRequestItem(id : number, firstname : string, lastname : string, telephone : number, idRequest : number, confirmation : number) : RequestItem {
    return new RequestPipe().transform(id , firstname , lastname , telephone, idRequest , confirmation );
  }

  public delete(idSender : number, idReceiver : number){
    return this.http.delete(this.URl+ '/' +idSender + '/' + idReceiver).subscribe((ok) => {console.log(ok)});
  }

  public createConfirmation(idRequestSender : number, idRequestReceiver : number, confirmation : number) : Confirmation {
    return  new ConfirmationPipe().transform(idRequestSender,idRequestReceiver,confirmation);
  }


  public uptadeRequest(confirmation){
    console.log(confirmation);
    return this.http.patch(this.URl + '/confirmation', confirmation).subscribe((ok)=>{console.log(ok)});
  }

}
