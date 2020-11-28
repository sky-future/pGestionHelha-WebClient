import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../commons/components/types/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  defaultElevation = 2;
  raisedElevation = 8;

  menuItems: MenuItem[] = [

    {
      label: 'CarpoolingRegister',
      icon: 'create',
      path: '/carpooling-register',
      click: this.onEmptyClick,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true // identique mais en mode desktop
    },

    {
      label: 'CarpoolingResearch',
      icon: 'place',
      path: '/carpooling-research',
      click: this.onEmptyClick,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true // identique mais en mode desktop
    }
  ]

  gridColumns = 3;

  toggleGridColumns(){
    this.gridColumns = this.gridColumns === 3 ? 2 : 3;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onEmptyClick(){

  }

}
