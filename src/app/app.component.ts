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
  onWindowClose(event ) {
      // event.this.userService.logout();

  }

  title = 'pGestionHelha-WebClient';
}
