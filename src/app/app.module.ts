import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './commons/components/header/header.component';
import { FooterComponent } from './commons/components/footer/footer.component';
import { HomeComponent } from './Pages/home/Components/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './commons/components/login/login.component';
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
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './commons/components/register/register.component';
import { CarpoolingResearchComponent } from './CarPooling/carpooling-research/Components/carpooling-research.component';
import { CreateCarPipe } from './CarPooling/pipes/create-car.pipe';
import { AlertComponent } from './commons/components/alert/alert.component';
import { RegisterModalComponent } from './commons/components/register/register-modal/register-modal.component';
import { LoginModalComponent } from './commons/components/login/login-modal/login-modal.component';
import { CreateUserLoginPipe } from './pipes/create-user-login.pipe';
import { CreateProfileComponent } from './commons/components/create-profile/create-profile.component';
import { CreateProfileModalComponent } from './commons/components/create-profile/create-profile-modal/create-profile-modal.component';
import { CreateProfilePipe } from './pipes/create-profile.pipe';
import { MyProfileComponent } from './commons/components/my-profile/my-profile.component';
import { RegisterFormAddressComponent } from './CarPooling/carpooling-register/Components/Register-Stepper-Form/Register-Form-Address/register-form-address.component';
import { RegisterStepperFormComponent } from './CarPooling/carpooling-register/Components/Register-Stepper-Form/register-stepper-form.component';
import { AddressPipe } from './CarPooling/pipes/address.pipe';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CreateUserPipe,
    RegisterComponent,
    CarpoolingResearchComponent,
    CreateCarPipe,
    AlertComponent,
    RegisterModalComponent,
    LoginModalComponent,
    CreateUserLoginPipe,
    RegisterFormAddressComponent,
    RegisterStepperFormComponent,
    AddressPipe,
    CreateUserLoginPipe,
    CreateProfileComponent,
    CreateProfileModalComponent,
    CreateProfilePipe,
    MyProfileComponent

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
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatTabsModule,
    //permet de faire des requêtes ajax


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
  exports:[RouterModule],
})
export class AppModule { }
