import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AddressCarDto} from '../types/address-car-dto';
import {CarPooling} from './car-pooling';
import {UserService} from '../../services/user.service';
import {CarDto} from "../types/car-dto";


@Injectable({
  providedIn: 'root'
})
export class CarPoolingService implements CarPooling{


  public address: Observable<AddressCarDto>;
  private urlAddress: string = 'api/address';
  private urlCar: string = 'api/cars';


  constructor(
    private http: HttpClient,
    private userService : UserService) {
  }


  postAddressAndCar(addresscarDTO: AddressCarDto): Observable<AddressCarDto>{
    let connectedUserID = this.userService.userValue.id;
    return this.http.post<AddressCarDto>(environment.serverAddress + this.urlAddress + "/"+ connectedUserID, addresscarDTO );
  }


  getCarByIdUser(idUser : number) : Promise<CarDto>{
     return this.http.get<CarDto>(environment.serverAddress + this.urlCar + '/' + idUser + '/user').toPromise();
   }

}
