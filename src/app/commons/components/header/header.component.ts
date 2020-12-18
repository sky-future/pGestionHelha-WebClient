import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from '../types/menu-item';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserService} from '../../../services/user.service';
import {ProfileService} from '../../../services/profile.service';
import {ProfileDto} from '../../../DTOs/profile-dto';
import {UserAuthenticateDtoOutput} from '../../../DTOs/user-authenticate-dto-output';
import {LastConnexionDto} from '../../../AdminPanel/types/last-connexion-dto';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _lastConnexionDto : LastConnexionDto;

  @Output() public sidenavToggle = new EventEmitter();

  //Contient la configuration des boutons du menu
  menuItems: MenuItem[] = [

    {

      label: 'Accueil',
      icon: 'home',
      path: '/home',
      click: this.onEmptyClick,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true // identique mais en mode desktop
    },
    {

      label: 'Register',
      icon: 'login',
      path: '',
      click: this.onRegisterClick.bind(this),
      showOnMobile: true, //visible quand on passe la taille de l'écran en mobile
      showOnTablet: true, // identique mais pour le mode tablette
      showOnDesktop: true // identique mais en mode desktop
    },
    {

      label: 'Login',
      icon: 'person_add',
      path: '',
      click: this.onLoginClick.bind(this),
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Admin',
      icon: 'person_add',
      path: '/list-users',
      click: this.onEmptyClick,
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },

  ];

  profile: ProfileDto = null;
  user: UserAuthenticateDtoOutput;


  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private profileService: ProfileService
  ) {
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => this.profile = profile);
  }

  onEmptyClick() {
  }

  onRegisterClick() {
    this.authService.openRegisterModal();
  }

  onLoginClick() {
    this.authService.openLoginModal();
  }

  //TODO terminer le logoutClick
  onLogoutClick() {

    let connectedUserId = this.userService.userValue.id;

    this.userService.updateLastconnexion(connectedUserId)
      .subscribe();

    this.userService.logout();
    window.location.reload();
  }

  checkUserHasProfile() : boolean{
    if(this.userService.userValue==null) return false;
    if(this.userService.userValue.profile ==0) return false;
   return true;
  }

  checkUserIsAdmin() : boolean{
    if(this.userService.userValue==null) return false;
    if(this.userService.userValue.admin) return true;
    return false;
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
