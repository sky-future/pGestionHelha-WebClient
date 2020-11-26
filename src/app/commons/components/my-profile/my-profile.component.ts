import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from '../../../services/profile.service';
import {ProfileDtoOutput} from '../../../DTOs/profile-dto-output';
import {UserService} from '../../../services/user.service';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  @ViewChild('lastname') lastname: ElementRef;
  @ViewChild('firstname') firstname: ElementRef;
  @ViewChild('telephone') telephone: ElementRef;
  @ViewChild('descript') descript: ElementRef;

  profile: ProfileDtoOutput;
  user = this.userService;
  isHidden: boolean[];
  changedContent: string[] = ['votre nom.', 'votre prénom.', 'votre numéro de téléphone.', 'votre description.'];
  patterntelephone: string = '^[0-9]{10}$';
  i: number;

  constructor(private profileService: ProfileService,
              private userService: UserService,
              private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => this.profile = profile);
    this.hideElements();
  }

  hideElements() {
    this.isHidden = [false, false, false, false];
  }

  confirmChange(nb: number) {
    //Todo faire des vérifs sur les valeurs genre téléphone en suivant le pattern etc.. Qu'il y a eu des changements

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
