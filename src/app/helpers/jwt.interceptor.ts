import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService : AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let currentUser = this.authService.currentUserValue;
    // If the user's connected and has a token, provides the token in the request header.
    if(currentUser && currentUser.token){
      request = request.clone({
        setHeaders:{
          Authorization: 'Bearer ${currentUser.token}'
        }
      });
    }
    return next.handle(request);
  }
}
