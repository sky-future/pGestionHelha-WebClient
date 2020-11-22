import { RouterModule, Routes} from '@angular/router';
//import {RegistrationComponent} from './components/registration/registration.component';
//import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/pages/home/home.component';
import {RegisterComponent} from './commons/components/register/register.component';
import {CarpoolingRegisterComponent} from './components/pages/carpooling/carpooling-register/carpooling-register.component';



const routes: Routes = [
  //{path: 'register', component : RegistrationComponent },
  //{path: 'login', component : LoginComponent},
  {path: 'home', component : HomeComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'carpooling-register', component : CarpoolingRegisterComponent}
];


export  const appRoutingModule = RouterModule.forRoot(routes);
