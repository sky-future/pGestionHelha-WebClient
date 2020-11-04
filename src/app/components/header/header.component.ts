import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from '../../interfaces/menu-item';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Contient la configuration des boutons du menu
  menuItems: MenuItem[] = [
    {
      label: 'Register',
      icon: 'login',
      path: '/register',
      showOnMobile: false, //visible quand on passe la taille de l'écran en mobile
      showOnTablet: true, // identique mais pour le mode tablette
      showOnDesktop: true // identique mais en mode desktop
    },
    {
      label: 'Login',
      icon: 'person_add',
      path: '/login',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
