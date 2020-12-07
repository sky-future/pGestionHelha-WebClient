import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialElevationDirective} from '../../directives/material-elevation.directive';
import {HomeComponent} from '../home/Components/home.component';
import {SplashscreenComponent} from '../splashscreen/splashscreen.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    MaterialElevationDirective,
    HomeComponent,
    SplashscreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
