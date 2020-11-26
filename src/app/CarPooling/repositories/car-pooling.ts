import {Address} from '../types/address';
import {Observable} from 'rxjs';
import {CarDto} from '../types/car-dto';

export interface CarPooling {

  postAddress(address: Address) : Observable<Address>;

  postCar(car: CarDto) : Observable<CarDto>;
}
