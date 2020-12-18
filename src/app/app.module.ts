import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidenavListComponent } from './commons/components/sidenav-list/sidenav-list.component'
import {CommonsModule} from './commons/components/types/commons.module';
import {CarpoolingModule} from './CarPooling/types/carpooling.module';
import {SharedModule} from './shared/shared.module';
import {PagesModule} from './Pages/types/pages.module';
import { RequestPipe } from './CarPooling/pipes/request.pipe';
import { ConfirmationPipe } from './CarPooling/pipes/confirmation.pipe';
import {AdminPanelModule} from './AdminPanel/types/admin-panel.module';
import { AdminPanelPipe } from './AdminPanel/pipes/admin-panel.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    RequestPipe,
    ConfirmationPipe,
    AdminPanelPipe

  ],
  imports: [

    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    SharedModule,
    CommonsModule,
    CarpoolingModule,
    PagesModule,
    AdminPanelModule

  ],

  schemas: [NO_ERRORS_SCHEMA],
  exports: [
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
