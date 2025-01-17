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
import {CarpoolingProfileComponent} from '../carpooling-profile/carpooling-profile.component';
import {CarPipePipe} from '../pipes/car-pipe.pipe';
import {AddresseOutputPipe} from '../pipes/adresse-output.pipe';
import {CarpoolingSenderComponent} from '../carpooling-sender/carpooling-sender.component';



@NgModule({
  declarations: [
    CarpoolingResearchComponent,
    AddresscarPipe,
    RegisterFormAddressComponent,
    CarpoolingInfoComponent,
    CarpoolingInfoModalComponent,
    CarpoolingRequestComponent,
    RequestcarpoolingPipe,
    CarpoolingProfileComponent,
    CarPipePipe,
    AddresseOutputPipe,
    CarpoolingSenderComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [
    CarpoolingRequestComponent,
    CarpoolingProfileComponent,
    CarPipePipe,
    AddresseOutputPipe,
    CarpoolingSenderComponent


  ]
})
export class CarpoolingModule { }
