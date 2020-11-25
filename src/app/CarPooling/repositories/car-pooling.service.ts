import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AddressDtoOutput} from '../types/address-dto-output';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AddressPost} from '../types/address-post';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarPoolingService {

  private addressSubject : BehaviorSubject<AddressDtoOutput>;
  public address: Observable<AddressDtoOutput>;
  private urlAddress: string = 'api/address';
  private urlCars: string = 'api/cars';

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  postAddress(address: AddressPost): Observable<AddressDtoOutput>{
    console.log(address);
    console.log(environment.serverAddress + this.urlAddress, address);
    return this.http.post<AddressDtoOutput>(environment.serverAddress + this.urlAddress, address );
  }



}
