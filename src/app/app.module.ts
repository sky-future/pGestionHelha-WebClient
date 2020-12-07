import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper'
import {MatSidenavModule} from '@angular/material/sidenav';
import {appRoutingModule} from './app-routing';
import {MatDividerModule} from '@angular/material/divider';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidenavListComponent } from './commons/components/sidenav-list/sidenav-list.component'
import {CommonsModule} from './commons/components/types/commons.module';
import {CarpoolingModule} from './CarPooling/types/carpooling.module';
import {SharedModule} from './shared/shared.module';
import {PagesModule} from './Pages/types/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent


  ],
  imports: [
    MatStepperModule,
    MatSidenavModule,
    appRoutingModule,
    MatDividerModule,
    MatDialogModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    SharedModule,
    CommonsModule,
    CarpoolingModule,
    PagesModule


    //permet de faire des requêtes ajax


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
  exports:[RouterModule],
})
export class AppModule { }
