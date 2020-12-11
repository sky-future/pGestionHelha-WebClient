import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from '../../../services/profile.service';
import {ProfileDtoOutput} from '../../../DTOs/profile-dto-output';
import {UserService} from '../../../services/user.service';
import {AlertService} from '../../../services/alert.service';
import {sha256} from 'js-sha256';
import {UserAuthenticateDto} from '../../../DTOs/user-authenticate-dto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordDto} from '../types/password-dto';
import {PasswordTransformPipe} from '../pipes/password-transform.pipe';

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
  private passwordDTO : PasswordDto;

  constructor(private profileService: ProfileService,
              private userService: UserService,
              private alertService: AlertService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => this.profile = profile);
    console.log(JSON.parse(localStorage.getItem('user')));
    this.hideElements();
  }

  formModel = this.formBuilder.group({
    currentPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.pattern(this.patternPwd)]],
    confirmPassword: ['', [Validators.required]]
  });

  hideElements() {
    this.isHidden = [false, false, false, false];
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.formModel.controls;
  }

  //Méthode pour changer le mot de passe
  confirmPasswordChange(){

    this.submitted = true;

    var connectedUser = this.userService.userValue.id;
    var passwordNew = this.formModel.value.newPassword;
    passwordNew = sha256(passwordNew);
    var passwordOld = this.formModel.value.currentPassword;
    passwordOld = sha256(passwordOld);

    this.passwordDTO = new PasswordTransformPipe().transform(
      connectedUser,
      passwordNew,
      passwordOld
    )

    this.userService
      .updatePassword(this.passwordDTO).subscribe(data=>this.alertService.success("Le mot de passe a bien été changé"),

            error => this.alertService.error("Le mot de passe actuel n'a pas été changé !")
    );

  }

  confirmChange(nb: number) {
    //Todo faire des vérifs sur les valeurs genre téléphone en suivant le pattern etc.. Qu'il y a eu des changements

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


// Custom validator to check that two fields match
  export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // Return if another validator has already found an error on the matchingControl
        return;
      }

      // Set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
