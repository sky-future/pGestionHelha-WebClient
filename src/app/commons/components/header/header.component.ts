import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../types/menu-item';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserService} from '../../../services/user.service';

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
      path: 'this.router.url',
      click : this.onRegisterClick.bind(this),
      showOnMobile: true, //visible quand on passe la taille de l'écran en mobile
      showOnTablet: true, // identique mais pour le mode tablette
      showOnDesktop: true // identique mais en mode desktop
    },
    {

      label: 'Login',
      icon: 'person_add',
      path: 'this.router.url',
      click: this.onLoginClick.bind(this),
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },

  ]

  profile: string;

  //TODO vérify if authService can be in public, needed to be accessed via .html
  constructor(public authService: AuthenticationService,
              public userService : UserService
              ) { }

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

  onLogoutClick() {
    this.userService.logout();
  }


}
