import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../types/menu-item';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../../../components/pages/home/home.component';
import {RegisterComponent} from '../register/register.component';

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
      click: this.onRegisterClick.bind(this),
      showOnMobile: false, //visible quand on passe la taille de l'écran en mobile
      showOnTablet: true, // identique mais pour le mode tablette
      showOnDesktop: true // identique mais en mode desktop
    },
    {

      label: 'Login',
      icon: 'person_add',
      path: 'this.router.url',
      click: this.onLoginClick.bind(this),
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  constructor(config: NgbModalConfig, private modalService: NgbModal, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }


  onEmptyClick(){
  }

  private dialogRegisterRef;
  private dialogLoginRef;

  onRegisterClick() {

    this.dialogRegisterRef = this.matDialog.open(RegisterComponent, {
      height: '700px',
      width: '600px',
    });

    this.dialogRegisterRef.afterClosed().subscribe((result: string) => {

    });
  }

  onLoginClick() {
    this.dialogLoginRef = this.matDialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
    });

    this.dialogLoginRef.afterClosed().subscribe((result: string) => {

    });
  }

}
