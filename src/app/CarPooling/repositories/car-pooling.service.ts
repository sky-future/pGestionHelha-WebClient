import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Address} from '../types/address';
import {environment} from '../../../environments/environment';
import {CarDto} from '../types/car-dto';
import {CarPooling} from './car-pooling';


@Injectable({
  providedIn: 'root'
})
export class CarPoolingService implements CarPooling{


  public address: Observable<Address>;
  private urlAddress: string = 'api/address';
  private urlCars: string = 'api/cars';

  constructor(
    private http: HttpClient) {
  }

  postAddress(address: Address): Observable<Address>{
    console.log(address);
    console.log(environment.serverAddress + this.urlAddress, address);
    return this.http.post<Address>(environment.serverAddress + this.urlAddress, address );
  }


  postCar(car : CarDto) : Observable<CarDto>{
    return this.http.post<CarDto>(environment.serverAddress + this.urlCars, car);
  }

}
