import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../types/menu-item';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {AccountModalComponent} from '../account-modal/account-modal.component';
import {MatMenuItem} from '@angular/material/menu';
import {WrappedNodeExpr} from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  display: boolean = false;
  showModalBox: boolean = false;
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
      path: '',
      click: this.open.bind(this),
      showOnMobile: false, //visible quand on passe la taille de l'écran en mobile
      showOnTablet: true, // identique mais pour le mode tablette
      showOnDesktop: true // identique mais en mode desktop
    },
    {

      label: 'Login',
      icon: 'person_add',
      path: '',
      click: this.onEmptyClick,
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  public open() {
    if (true) this.showModalBox = true;
  }



  onLoginClick(){
    /*console.log(this.display.valueOf());
    this.display = true;
    console.log(this.display.valueOf());*/
  }


  onEmptyClick(){
  }

}
