import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarpoolingResearchComponent} from '../carpooling-research/Components/carpooling-research.component';
import {AddresscarPipe} from '../pipes/addresscar.pipe';
import {SharedModule} from '../../shared/shared.module';
import {GoogleMapsModule} from '@angular/google-maps';
import {RegisterFormAddressComponent} from '../carpooling-register/Components/Register-Stepper-Form/Register-Form-Address/register-form-address.component';
import {CarpoolingInfoComponent} from '../carpooling-research/Components/carpooling-info/carpooling-info.component';
import {CarpoolingInfoModalComponent} from '../carpooling-research/Components/carpooling-info/carpooling-info-modal/carpooling-info-modal.component';


@NgModule({
  declarations: [
    CarpoolingResearchComponent,
    AddresscarPipe,
    RegisterFormAddressComponent,
    CarpoolingInfoComponent,
    CarpoolingInfoModalComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
  ],
  exports: [
  ]
})
export class CarpoolingModule { }
