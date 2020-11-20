import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {CarAddDto} from '../../../DTOs/car-add-dto';
import {CarAddDtoOutput} from '../../../DTOs/car-add-dto-output';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  public static URL: string = 'api/cars';

  constructor(public http: HttpClient) { }

  post(car : CarAddDto): Observable<CarAddDtoOutput> {
    console.log(car);
    return this.http.post<CarAddDtoOutput>(environment.serverAddress + CarApiService.URL, car);
  }
}
