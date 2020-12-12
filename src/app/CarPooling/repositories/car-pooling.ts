import {Observable} from 'rxjs';
import {AddressCarDto} from '../types/address-car-dto';

export interface CarPooling {

  postAddressAndCar(address: AddressCarDto) : Observable<AddressCarDto>;


}
