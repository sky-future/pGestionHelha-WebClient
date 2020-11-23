import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AlertService} from '../../../services/alert.service';
import {first} from 'rxjs/operators';
import {ProfileDto} from '../../../DTOs/profile-dto';
import {ProfileService} from '../../../services/profile.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  loading = false;
  submitted = false;
  private profileRegister : ProfileDto;


  //LAXXXXXX
  patternRegisterNumber : string = "^(LA|)[0-9]{6}$";

  //04XXXXXXXX
  patternPhoneNumber : string = "^[0-9]{10}$";

  //0 to 144 characters
  patternDescription : string = "^[a-zA-Z0-9._]{0,144}$";

  constructor(private formBuilder: FormBuilder,
              private alertService: AlertService,
              public profileService : ProfileService,
              private authenticationService: AuthenticationService
              ) { }

  formModel = this.formBuilder.group({
    lastname: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    matricule: ['', [Validators.required, Validators.pattern(this.patternRegisterNumber)]],
    telephone: ['', [Validators.required, Validators.pattern(this.patternPhoneNumber)]],
    descript: ['', [Validators.required, Validators.pattern(this.patternDescription)]]
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
      this.formModel.value.descript);

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