import {Component, Inject, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserDto} from '../../../DTOs/user-dto';
import {first} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import {UserApiService} from '../repositories/user-api.service';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLinear = false;
  loading = false;
  submitted = false;
  formGroupPwd: FormGroup;
  patternPwd: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$';
  formGroupEmail: FormGroup;
  patternEmail : string = '^\\S+@\\S+$';

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              public userApiService: UserApiService,
              private alertService: AlertService,
  ) {
  }

  ngOnInit() {

    this.userApiService.formModel.reset();
    //  this.userApiService.formModelTest.reset();
    //
    // this.formGroupEmail = this.formBuilder.group({
    //   email: ['', [Validators.required]]
    // });
    //
    // this.formGroupPwd = this.formBuilder.group({
    //   password: ['', [Validators.required, Validators.pattern(this.patternPwd)]]
    // });
  }


  // Convenience getter for easy access to form fields
  get f() {
    return this.userApiService.formModel.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    this.loading = true;

    // Stops here if form is invalid
    if (this.userApiService.formModel.invalid) {
      this.loading = false;
      return;
    }

    this.userApiService.post().pipe(first()).subscribe(data => {

        //Alert success
        this.alertService.success('Registration successful', {keepAfterRouteChange: true});

        //Opens login and closes register
        this.authenticationService.openLoginModal();

      },
      error => {
        //Error alert
        this.alertService.error('Registration unsuccessful, check your connection', {keepAfterRouteChange: true});
        this.loading = false;
      });

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
