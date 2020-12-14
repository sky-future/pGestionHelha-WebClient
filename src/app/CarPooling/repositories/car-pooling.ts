import {Observable} from 'rxjs';
import {AddressCarDto} from '../types/address-car-dto';
import {CarPoolingRequestDto} from '../types/car-pooling-request-dto';

export interface CarPooling {

  postAddressAndCar(address: AddressCarDto) : Observable<AddressCarDto>;

  requestCarpooling(requestCarpooling : CarPoolingRequestDto) : Observable<CarPoolingRequestDto>;

}
