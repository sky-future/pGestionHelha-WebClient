import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {first} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import {UserApiService} from '../repositories/user-api.service';
import {AlertService} from '../../../services/alert.service';
import {UserPost} from '../../../DTOs/user-post';
import {UserService} from '../../../services/user.service';
import {sha256} from 'js-sha256';
import {EmailRegisteredService} from '../../../services/email-registered.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  loading = false;
  submitted = false;
  formGroupPwd: FormGroup;
  patternPwd: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$';
  patternMail : string = '^[^@]+@[^@]+\\.[^@]+$';
  private userRegister: UserPost;
  //Pour passer email vers creat-profile pour lier le user et le profile


  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              public userService: UserService,
              private userApiService: UserApiService,
              private alertService: AlertService,
              private emailService : EmailRegisteredService
  ) {
  }

  formModel = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(this.patternMail)]],
    password: ['', [Validators.required, Validators.pattern(this.patternPwd)]],
    confirmPassword: ['', Validators.required]
  });

  ngOnInit() {

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

    var password = this.formModel.value.password;
    password = sha256(password);
    this.userRegister = this.userService.createUser(this.formModel.value.email, password);

    this.userService.register(this.userRegister).pipe(first()).subscribe(data => {

        //Alert success
        this.alertService.success('Registration successful', {keepAfterRouteChange: true});


        this.emailService.newEmail(data.id);

        //Opens login and closes register
        this.authenticationService.openCreateProfileModal();



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
