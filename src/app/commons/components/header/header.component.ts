import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from '../types/menu-item';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {AccountModalComponent} from '../account-modal/account-modal.component';



declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  diplay = false;

  //Contient la configuration des boutons du menu
  menuItems: MenuItem[] = [
    {
      label: 'Register',
      icon: 'login',
      path: '',
      click: 'onLoginClick()',
      showOnMobile: false, //visible quand on passe la taille de l'écran en mobile
      showOnTablet: true, // identique mais pour le mode tablette
      showOnDesktop: true // identique mais en mode desktop
    },
    {
      label: 'Login',
      icon: 'person_add',
      path: '',
      click: 'onLoginClick()',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  constructor(config: NgbModalConfig, private modalService : NgbModal ) { }

  ngOnInit(): void {
  }
  //todo ne fonctionne pas correctement !
  onLoginClick(){
    //this.modalService.open($('#accountModal').showModal);
    //$('#accountModal').modal('show');
    //AccountModalComponent.showModal();
    //this.accountTest.show();

    console.log("test btn login");
    this.diplay = true;



  }

}
