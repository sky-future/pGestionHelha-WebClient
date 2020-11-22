import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../types/menu-item';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {AlertService} from '../../../services/alert.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Contient la configuration des boutons du menu
  menuItems: MenuItem[] = [

    {

      label: 'Home',
      icon: 'home',
      path: '/home',
      click: this.onEmptyClick,
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true // identique mais en mode desktop
    },
    {

      label: 'Register',
      icon: 'login',
      //path : '/register',
     // path: 'this.router.url',
      path: '',
      click : this.onRegisterClick.bind(this),
      //click: this.onRegisterClick.bind(this),
      showOnMobile: false, //visible quand on passe la taille de l'écran en mobile
      showOnTablet: true, // identique mais pour le mode tablette
      showOnDesktop: true // identique mais en mode desktop
    },
    {

      label: 'Login',
      icon: 'person_add',
      //path: 'this.router.url',
      path: '',
      click: this.onLoginClick.bind(this),
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  //TODO vérify if authService can be in public, needed to be accessed via .html
  constructor(config: NgbModalConfig, private modalService: NgbModal, public authService: AuthenticationService,) { }

  ngOnInit(): void {
  }

  onEmptyClick(){
  }

  onRegisterClick() {
    this.authService.openRegisterModal();
  }

  onLoginClick() {
    this.authService.openLoginModal();
  }

}
