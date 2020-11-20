import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //TODO: importer authentification
  constructor(private router: Router, private authService: AuthenticationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.authService.currentUserValue;
    if(currentUser){
      return true;
    }

    this.router.navigate([''], {queryParams: {returnURL: state.url}}
    );

    return false;
  }

}
