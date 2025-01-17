import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Pages/home/Components/home.component';
import {RegisterComponent} from './commons/components/register/register.component';
import {LoginComponent} from './commons/components/login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import {CreateProfileComponent} from './commons/components/create-profile/create-profile.component';
import {MyProfileComponent} from './commons/components/my-profile/my-profile.component';
import {RegisterFormAddressComponent} from './CarPooling/carpooling-register/Components/Register-Stepper-Form/Register-Form-Address/register-form-address.component';
import {CarpoolingResearchComponent} from './CarPooling/carpooling-research/Components/carpooling-research.component';
import {SplashscreenComponent} from './Pages/splashscreen/splashscreen.component';
import {ListUserComponent} from './AdminPanel/list-user/list-user.component';
import {AddUserComponent} from './AdminPanel/add-user/add-user.component';
import {EditUserComponent} from './AdminPanel/edit-user/edit-user.component';


const routes: Routes = [
  //{path: 'register', component : RegistrationComponent },
  //{path: 'login', component : LoginComponent},
  { path: '', redirectTo: 'splash',pathMatch: 'full' },
  {path: 'splash', component : SplashscreenComponent},
  {path: 'home', component : HomeComponent, canActivate : [AuthGuard]},
  {path: 'register', component : RegisterComponent},
  {path: 'carpooling-register', component : RegisterFormAddressComponent, canActivate : [AuthGuard]},
  {path: 'login', component : LoginComponent},
  {path: 'create-profile', component : CreateProfileComponent},
  {path: 'my-profile', component : MyProfileComponent, canActivate : [AuthGuard]},
  {path: 'carpooling-research', component : CarpoolingResearchComponent, canActivate : [AuthGuard]},
  {path: 'list-users', component : ListUserComponent, canActivate : [AuthGuard]},
  {path: 'add-user', component : AddUserComponent, canActivate : [AuthGuard]},
  {path: 'edit-user', component : EditUserComponent, canActivate : [AuthGuard]}

];

export  const appRoutingModule = RouterModule.forRoot(routes);
