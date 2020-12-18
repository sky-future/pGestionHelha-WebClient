import { Component, OnInit } from '@angular/core';
import {HomeItem} from '../../../commons/components/types/home-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  defaultElevation =2;

  homeItems: HomeItem[] = [

    {
      button_path: "/carpooling-register",
      title: "Inscrire sa voiture au covoiturage",
      image_path: "./../assets/images/voiture.jpg",
      content: ""

    },
    {
      button_path: "/carpooling-research",
      title: "Rechercher covoiturage",
      image_path: "./../assets/images/voiture.jpg",
      content: "",
    },
    {
      button_path: "/home",
      title: "S'incrire en tant que tuteur",
      image_path: "./../assets/images/livre.jpg",
      content: "",
    },
    {
      button_path: "/home",
      title: "Rechercher un tuteur",
      image_path: "./../assets/images/livre.jpg",
      content: "",
    },
    {
      button_path: "/home",
      title: "Commander à la cafétaria",
      image_path: "./../assets/images/restauration.jpg",
      content: "",
    }

  ]

  constructor() { }

  ngOnInit(): void {

    var html = {
      content : '<div id="content"><h2 id="firstHeading" class="firstHeading"></h2><p></p></div>'
    }
  }

}
