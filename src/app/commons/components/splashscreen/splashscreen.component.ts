import { Component, OnInit } from '@angular/core';
import {HomeItem} from '../types/home-item';
import {AuthenticationService} from '../../../services/authentication.service';
import {SplashItems} from '../types/splash-items';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent implements OnInit {

  homeItems: SplashItems[] = [

    {
      click : this.onLoginClick.bind(this),
      title: "Inscrire sa voiture au covoiturage",
      image_path: "./../assets/images/voiture.jpg",
      content: ""

    },

    {
      click : this.onLoginClick.bind(this),
      title: "Rechercher covoiturage",
      image_path: "./../assets/images/voiture.jpg",
      content: "",
    },
    {
      click : this.onLoginClick.bind(this),
      title: "S'incrire en tant que tuteur",
      image_path: "./../assets/images/livre.jpg",
      content: "",
    },
    {
      click : this.onLoginClick.bind(this),
      title: "Rechercher un tuteur",
      image_path: "./../assets/images/livre.jpg",
      content: "",
    },
    {
      click : this.onLoginClick.bind(this),
      title: "Commander à la cafétaria",
      image_path: "./../assets/images/restauration.jpg",
      content: "",
    }

  ]

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.authService.openLoginModal();
  }

}
