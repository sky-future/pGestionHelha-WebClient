import { RouterModule, Routes} from '@angular/router';
//import {RegistrationComponent} from './components/registration/registration.component';
//import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/pages/home/home.component';



const routes: Routes = [
  //{path: 'register', component : RegistrationComponent },
  //{path: 'login', component : LoginComponent},
  {path: 'home', component : HomeComponent}
];


export  const appRoutingModule = RouterModule.forRoot(routes);
