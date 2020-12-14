import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AddressCarDto} from '../types/address-car-dto';
import {CarPooling} from './car-pooling';
import {UserService} from '../../services/user.service';
import {OfferCarpoolingDto} from '../types/offer-carpooling-dto';
import {CarDto} from "../types/car-dto";
import {AddresseGetDtoOutput} from '../types/address-get-dto-output';
import {CarPoolingRequestDto} from '../types/car-pooling-request-dto';


@Injectable({
  providedIn: 'root'
})
export class CarPoolingService implements CarPooling{


  public address: Observable<AddressCarDto>;
  private urlAddress: string = 'api/address';
  private urlOfferCarpooling: string = 'api/offerCarpooling';
  private urlCar: string = 'api/cars';
  private url_Request_Carpooling : string = 'api/requestcarpooling';


  constructor(
    private http: HttpClient,
    private userService : UserService) {
  }


  postAddressAndCar(addresscarDTO: AddressCarDto): Observable<AddressCarDto>{
    let connectedUserID = this.userService.userValue.id;
    return this.http.post<AddressCarDto>(environment.serverAddress + this.urlAddress + "/"+ connectedUserID, addresscarDTO );
  }

  queryOfferCarpooling(): Observable<OfferCarpoolingDto>{
    return this.http.get<OfferCarpoolingDto>(environment.serverAddress + this.urlOfferCarpooling);
  }
  // //NEED UPTADE AFTER CHANGING IN API
  // getCarByIdUser(idUser : number) : Observable<CarDto>{
  //   return this.http.post<CarDto>(environment.serverAddress + this.urlCars, idUser);
  // }

  getCarByIdUser(idUser : number) : Promise<CarDto>{
     return this.http.get<CarDto>(environment.serverAddress + this.urlCar + '/' + idUser + '/user').toPromise();
   }

  getListForCarpooling() : Promise<AddresseGetDtoOutput>{
    return this.http.get<AddresseGetDtoOutput>(environment.serverAddress + this.urlOfferCarpooling + '/list').toPromise();
  }


  requestCarpooling(requestCarpooling: CarPoolingRequestDto): Observable<CarPoolingRequestDto> {
   return this.http.post<CarPoolingRequestDto>(environment.serverAddress + this.url_Request_Carpooling, requestCarpooling);
  }

}
