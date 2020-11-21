import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserDto} from '../../../DTOs/user-dto';
import {first} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import {UserApiService} from '../repositories/user-api.service';
import {AlertService} from '../../../services/alert.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  private patternMail: string = '^\\S+@\\S+$';
  private patternPwd: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$';
  userDto: UserDto;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              public userApiService : UserApiService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.userApiService.formModel.reset();
    // this.registerForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.pattern(this.patternMail)]],
    //   password: ['', [Validators.required, Validators.pattern(this.patternPwd)]],
    //   confirmPassword: ['', Validators.required]
    // }, {
    //   validator: MustMatch('password', 'confirmPassword')
    // });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.userApiService.formModel.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();

    this.loading=true;

    // stop here if form is invalid
    if (this.userApiService.formModel.invalid) {
      this.loading=false;
      return;
    }

    this.userApiService.post().pipe(first()).subscribe(data => {
        this.alertService.success('Registration successful', { keepAfterRouteChange: true });

       // this.router.navigate(['../login'], { relativeTo: this.route });

      },
      error => {
        this.alertService.error('Registration unsuccessful, check your connection', { keepAfterRouteChange: true });
        this.loading = false;
      });

  }

}


// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
