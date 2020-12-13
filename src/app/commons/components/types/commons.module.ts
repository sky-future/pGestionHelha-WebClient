import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {LoginComponent} from '../login/login.component';
import {CreateUserPipe} from '../../../pipes/create-user.pipe';
import {RegisterComponent} from '../register/register.component';
import {RegisterModalComponent} from '../register/register-modal/register-modal.component';
import {LoginModalComponent} from '../login/login-modal/login-modal.component';
import {CreateUserLoginPipe} from '../../../pipes/create-user-login.pipe';
import {CreateProfileComponent} from '../create-profile/create-profile.component';
import {CreateProfileModalComponent} from '../create-profile/create-profile-modal/create-profile-modal.component';
import {CreateProfilePipe} from '../../../pipes/create-profile.pipe';
import {MyProfileComponent} from '../my-profile/my-profile.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {appRoutingModule} from '../../../app-routing';
import {AlertComponent} from '../alert/alert.component';
import {SharedModule} from '../../../shared/shared.module';
import {MatListModule} from '@angular/material/list';
import {PasswordTransformPipe} from '../pipes/password-transform.pipe';
import {CarpoolingRequestComponent} from '../../../CarPooling/carpooling-request/carpooling-request.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CarpoolingModule} from '../../../CarPooling/types/carpooling.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateUserPipe,
    RegisterComponent,
    RegisterModalComponent,
    LoginModalComponent,
    CreateUserLoginPipe,
    CreateProfileComponent,
    CreateProfileModalComponent,
    CreateProfilePipe,
    MyProfileComponent,
    AlertComponent,
    PasswordTransformPipe,


  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    appRoutingModule,
    SharedModule,
    MatListModule,
    MatExpansionModule,
    CarpoolingModule

  ],
  exports: [
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateUserPipe,
    RegisterComponent,
    RegisterModalComponent,
    LoginModalComponent,
    CreateUserLoginPipe,
    CreateProfileComponent,
    CreateProfileModalComponent,
    CreateProfilePipe,
    MyProfileComponent,
    MatMenuModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule


  ]
})
export class CommonsModule { }
