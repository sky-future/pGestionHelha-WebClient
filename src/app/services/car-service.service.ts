import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CarAddDto} from '../DTOs/car-add-dto';
import {CreateCarPipe} from '../pipes/create-car.pipe';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(public fb: FormBuilder) { }

  formModel = this.fb.group({
    immatriculation: ['', [Validators.required]],
    placenb: ['', [Validators.required]]
  });

  public createCar() : CarAddDto
  {
    return new CreateCarPipe().transform(this.formModel.value.immatriculation, this.formModel.value.placenb);
  }
}
