import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserAuthenticateDto} from '../../../../DTOs/user-authenticate-dto';
import {ProfileDtoOutput} from '../../../../DTOs/profile-dto-output';
import {ProfileService} from '../../../../services/profile.service';
import {UserService} from '../../../../services/user.service';
import {AlertService} from '../../../../services/alert.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('lastname') lastname: ElementRef;
  @ViewChild('firstname') firstname: ElementRef;
  @ViewChild('telephone') telephone: ElementRef;
  @ViewChild('descript') descript: ElementRef;
  @ViewChild('currentPassword') currentPassword: ElementRef;

  private userLogin: UserAuthenticateDto;
  profile: ProfileDtoOutput;
  user = this.userService;
  isHidden: boolean[];
  changedContent: string[] = ['votre nom.', 'votre prénom.', 'votre numéro de téléphone.', 'votre description.'];
  patterntelephone: string = '^[0-9]{10}$';
  i: number;
  showForm: boolean = false;
  patternPwd: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$';
  submitted = false;


  constructor(private profileService: ProfileService,
              private userService: UserService,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => this.profile = profile);
    console.log(JSON.parse(localStorage.getItem('user')));
    this.hideElements();
  }


  hideElements() {
    this.isHidden = [false, false, false, false];
  }

  //Méthode pour changer le mot de passe
  confirmPasswordChange(){

    // this.submitted = true;
    //
     var connectedUser = this.userService.userValue.id;


  }

  confirmChange(nb: number) {

    //Vérifie si modif
    this.findDifference(nb);
    if (this.i == 0) {
      this.alertService.warn('Aucune modification introduite.');
      return;
    }

    this.profile.idUser = this.userService.userValue.id;

    let profileMod = this.profileService
      .createProfileOutput(
        this.profile.id,
        this.profile.lastname,
        this.profile.firstname,
        this.profile.matricule,
        this.profile.telephone,
        this.profile.descript,
        this.profile.idUser
      );

    this.profileService.updateProfile(profileMod)
      .subscribe(answer => {
        console.log(answer);
      });

    //Success alert
    this.alertService.success('Vous avez changé ' + this.changedContent[nb]);

    //resets every icons and labels/input
    this.hideElements();

    //petit reload bitch
    location.reload();

  }

  findDifference(nb: number) {

    this.i = 0;

    switch (nb) {
      case 0 :
        if (this.profile.lastname != this.lastname.nativeElement.value) {
          this.profile.lastname = this.lastname.nativeElement.value;
          this.i++;
        }
        break;

      case 1:
        if (this.profile.firstname != this.firstname.nativeElement.value) {
          this.profile.firstname = this.firstname.nativeElement.value;
          this.i++;
        }
        break;

      case 2:
        if (this.profile.telephone != this.telephone.nativeElement.value) {
          this.profile.telephone = this.telephone.nativeElement.value;
          this.i++;
        }
        break;

      case 3:
        if (this.profile.descript != this.descript.nativeElement.value) {
          this.profile.descript = this.descript.nativeElement.value;
          this.i++;
        }
        break;
    }

  }


  changeHidden(nb: number) {

    for (let i = 0; i < this.isHidden.length; i++) {
      if (i == nb) {
        this.isHidden[nb] = !this.isHidden[nb];
      } else {
        this.isHidden[i] = false;
      }
    }

  }


}

