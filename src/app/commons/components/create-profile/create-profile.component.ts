import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AlertService} from '../../../services/alert.service';
import {first} from 'rxjs/operators';
import {ProfileDto} from '../../../DTOs/profile-dto';
import {ProfileService} from '../../../services/profile.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {EmailRegisteredService} from '../../../services/email-registered.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  loading = false;
  submitted = false;
  private profileRegister : ProfileDto;
  email : number;

  //LAXXXXXX
  //Todo check if exist in database
  patternRegisterNumber : string = "^(LA|)[0-9]{6}$";

  //04XXXXXXXX
  //todo check if in database
  patternPhoneNumber : string = "^[0-9]{10}$";

  //0 to 144 characters
  patternDescription : string = "^.{0,144}$";

  constructor(private formBuilder: FormBuilder,
              private alertService: AlertService,
              public profileService : ProfileService,
              private authenticationService: AuthenticationService,
              private emailService : EmailRegisteredService,
              private userService : UserService
              ) {

    if(!this.userService.userValue) {
      //Récupère via le service la valeur de l'email d'engistrée via register dans le service
      this.emailService.email.subscribe(email => {
        this.email = email;
      });
      //Sinon récupère l'id de l'utilisteur qui est connecté mais qui n'a pas encore créé de profile
    } else this.email = this.userService.userValue.id;
  }

  formModel = this.formBuilder.group({
    lastname: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    matricule: ['', [Validators.required, Validators.pattern(this.patternRegisterNumber)]],
    telephone: ['', [Validators.required, Validators.pattern(this.patternPhoneNumber)]],
    descript: ['', [Validators.required, Validators.pattern(this.patternDescription)]],
    idUser: ['', []]
  });

  ngOnInit(): void {

    this.formModel.reset();

  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.formModel.controls;
  }

  onSubmit() {

    this.submitted = true;

    this.alertService.clear();

    this.loading = true;

    this.formModel.value.idUser = this.email;

    // Stops here if form is invalid
    if (this.formModel.invalid) {
      this.loading = false;
      return;
    }

    this.profileRegister = this.profileService.createProfile(
      this.formModel.value.lastname,
      this.formModel.value.firstname,
      this.formModel.value.matricule,
      this.formModel.value.telephone,
      this.formModel.value.descript,
      this.formModel.value.idUser
    );

    this.profileService.registerProfile(this.profileRegister).pipe(first()).subscribe(data => {


        //Alert success
        this.alertService.success('Registration successful', {keepAfterRouteChange: true});

        this.authenticationService.openLoginModal();

      },
      error => {
        //Error alert
        this.alertService.error('Registration unsuccessful, check your connection', {keepAfterRouteChange: true});
        this.loading = false;
      });

  }


}
