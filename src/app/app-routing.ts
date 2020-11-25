import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Pages/home/Components/home.component';
import {RegisterComponent} from './commons/components/register/register.component';
import {LoginComponent} from './commons/components/login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import {RegisterFormAddressComponent} from './CarPooling/carpooling-register/Components/Register-Stepper-Form/Register-Form-Address/register-form-address.component';



const routes: Routes = [
  //{path: 'register', component : RegistrationComponent },
  //{path: 'login', component : LoginComponent},
  {path: 'home', component : HomeComponent, canActivate : [AuthGuard]},
  {path: 'register', component : RegisterComponent},
  {path: 'carpooling-register', component : RegisterFormAddressComponent, canActivate: [AuthGuard]},
  {path: 'login', component : LoginComponent}
];


export  const appRoutingModule = RouterModule.forRoot(routes);
