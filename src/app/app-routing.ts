import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Pages/home/Components/home.component';
import {RegisterComponent} from './commons/components/register/register.component';
import {CarpoolingRegisterComponent} from './components/pages/carpooling/carpooling-register/carpooling-register.component';
import {LoginComponent} from './commons/components/login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import {CreateProfileComponent} from './commons/components/create-profile/create-profile.component';
import {MyProfileComponent} from './commons/components/my-profile/my-profile.component';



const routes: Routes = [
  //{path: 'register', component : RegistrationComponent },
  //{path: 'login', component : LoginComponent},
  {path: 'home', component : HomeComponent, canActivate : [AuthGuard]},
  {path: 'register', component : RegisterComponent},
  {path: 'carpooling-register', component : CarpoolingRegisterComponent},
  {path: 'login', component : LoginComponent},
  {path: 'create-profile', component : CreateProfileComponent},
  {path: 'my-profile', component : MyProfileComponent, canActivate : [AuthGuard]}

];


export  const appRoutingModule = RouterModule.forRoot(routes);
