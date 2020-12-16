import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarpoolingResearchComponent} from '../carpooling-research/Components/carpooling-research.component';
import {AddresscarPipe} from '../pipes/addresscar.pipe';
import {SharedModule} from '../../shared/shared.module';
import {GoogleMapsModule} from '@angular/google-maps';
import {RegisterFormAddressComponent} from '../carpooling-register/Components/Register-Stepper-Form/Register-Form-Address/register-form-address.component';
import {CarpoolingInfoComponent} from '../carpooling-research/Components/carpooling-info/carpooling-info.component';
import {CarpoolingInfoModalComponent} from '../carpooling-research/Components/carpooling-info/carpooling-info-modal/carpooling-info-modal.component';
import {CarpoolingRequestComponent} from '../carpooling-request/carpooling-request.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {RequestcarpoolingPipe} from '../pipes/requestcarpooling.pipe';


@NgModule({
  declarations: [
    CarpoolingResearchComponent,
    AddresscarPipe,
    RegisterFormAddressComponent,
    CarpoolingInfoComponent,
    CarpoolingInfoModalComponent,
    CarpoolingRequestComponent,
    RequestcarpoolingPipe

  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [
    CarpoolingRequestComponent
  ]
})
export class CarpoolingModule { }
