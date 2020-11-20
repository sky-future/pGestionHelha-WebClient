import { Component, OnInit } from '@angular/core';
import {CarServiceService} from '../../../../services/car-service.service';
import {first} from 'rxjs/operators';
import {CarAddDto} from '../../../../DTOs/car-add-dto';
import {CarApiService} from '../../../../commons/components/repositories/car-api.service';

@Component({
  selector: 'app-carpooling-register',
  templateUrl: './carpooling-register.component.html',
  styleUrls: ['./carpooling-register.component.css']
})
export class CarpoolingRegisterComponent implements OnInit {
  private submitted: boolean;
  private car: CarAddDto;

  constructor(public carService : CarServiceService, public carApi : CarApiService) { }

  ngOnInit(): void {
    this.carService.formModel.reset();
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.carService.formModel.invalid) {
      return;
    }

    this.car = this.carService.createCar();

    this.carApi.post(this.car).pipe(first()).subscribe();

  }

}
