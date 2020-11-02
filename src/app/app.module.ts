import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
