import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {appRoutingModule} from './app-routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent,
    RegistrationComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    appRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule],
})
export class AppModule { }
