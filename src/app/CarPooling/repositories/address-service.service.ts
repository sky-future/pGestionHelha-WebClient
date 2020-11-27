import { Injectable } from '@angular/core';
import {Form, FormBuilder, Validators} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AddresseGetDtoOutput, addressList} from '../types/address-get-dto-output';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private AdresseSubject: BehaviorSubject<AddresseGetDtoOutput>;
  private addresseVoit : Observable<AddresseGetDtoOutput>;

  public URL: string = environment.serverAddress + 'api/address';

  constructor(public http: HttpClient) {
    this.AdresseSubject = new BehaviorSubject<AddresseGetDtoOutput>(JSON.parse(localStorage.getItem('address')));
    this.addresseVoit = this.AdresseSubject.asObservable();
  }


  public query(): Observable<AddresseGetDtoOutput> {
    return this.http.get<AddresseGetDtoOutput>(this.URL);
  }
}
