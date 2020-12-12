import {Component, HostListener, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private userService: UserService) {
  }
  @HostListener('window:unload', [ '$event' ])
  unloadHandler(event) {

  }

  title = 'pGestionHelha-WebClient';
}
