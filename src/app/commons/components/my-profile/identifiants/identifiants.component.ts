import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserAuthenticateDto} from '../../../../DTOs/user-authenticate-dto';
import {ProfileDtoOutput} from '../../../../DTOs/profile-dto-output';
import {PasswordDto} from '../../types/password-dto';
import {ProfileService} from '../../../../services/profile.service';
import {UserService} from '../../../../services/user.service';
import {AlertService} from '../../../../services/alert.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {sha256} from 'js-sha256';
import {PasswordTransformPipe} from '../../pipes/password-transform.pipe';

@Component({
  selector: 'app-identifiants',
  templateUrl: './identifiants.component.html',
  styleUrls: ['./identifiants.component.css']
})
export class IdentifiantsComponent implements OnInit {

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
  private passwordDTO: PasswordDto;

  constructor(private profileService: ProfileService,
              private userService: UserService,
              private alertService: AlertService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => this.profile = profile);
    console.log(JSON.parse(localStorage.getItem('user')));
    // this.hideElements();
  }

  formModel = this.formBuilder.group({
    currentPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.pattern(this.patternPwd)]],
    confirmPassword: ['', [Validators.required]]
  });

  // Convenience getter for easy access to form fields
  get f() {
    return this.formModel.controls;
  }

  //Méthode pour changer le mot de passe
  confirmPasswordChange() {

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

    this.userService.updatePassword(this.passwordDTO).subscribe(data => this.alertService.success("Le mot de passe a bien été changé"),

      error => this.alertService.error("Le mot de passe actuel n'a pas été changé !")
    );

  }

// Custom validator to check that two fields match
  MustMatch(controlName: string, matchingControlName: string) {
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
}
