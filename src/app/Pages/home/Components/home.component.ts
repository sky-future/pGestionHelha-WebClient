import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../commons/components/types/menu-item';
import {HomeItem} from '../../../commons/components/types/home-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


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
      button_path: "",
      title: "S'incrire en tant que tuteur",
      image_path: "./../assets/images/livre.jpg",
      content: "",
    },
    {
      button_path: "",
      title: "Rechercher un tuteur",
      image_path: "./../assets/images/livre.jpg",
      content: "",
    },
    {
      button_path: "",
      title: "Commander à la cafétaria",
      image_path: "./../assets/images/restauration.jpg",
      content: "",
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }


}
