import { RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';



const routes: Routes = [
  {path: 'register', component : RegistrationComponent },
  {path: 'login', component : LoginComponent}
];


export  const appRoutingModule = RouterModule.forRoot(routes);
