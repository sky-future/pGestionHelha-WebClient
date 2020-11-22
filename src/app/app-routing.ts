import { RouterModule, Routes} from '@angular/router';
//import {RegistrationComponent} from './components/registration/registration.component';
//import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/pages/home/home.component';
import {RegisterComponent} from './commons/components/register/register.component';
import {CarpoolingRegisterComponent} from './components/pages/carpooling/carpooling-register/carpooling-register.component';
import {LoginComponent} from './commons/components/login/login.component';
import {AuthGuard} from './helpers/auth.guard';



const routes: Routes = [
  //{path: 'register', component : RegistrationComponent },
  //{path: 'login', component : LoginComponent},
  {path: 'home', component : HomeComponent, canActivate : [AuthGuard]},
  {path: 'register', component : RegisterComponent},
  {path: 'carpooling-register', component : CarpoolingRegisterComponent},
  {path: 'login', component : LoginComponent}
];


export  const appRoutingModule = RouterModule.forRoot(routes);
