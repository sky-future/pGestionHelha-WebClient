import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {UserDto} from '../../../DTOs/user-dto';
import {first} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import {UserApiService} from '../repositories/user-api.service';
import {CreateUserPipe} from '../../../pipes/create-user.pipe';
import {UserPost} from '../../../DTOs/user-post';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  private patternPwd: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$';
  private patternMail: string = '^\\S+@\\S+$';
  userDto: UserDto;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              public userApiService : UserApiService) {
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

    // stop here if form is invalid
    if (this.userApiService.formModel.invalid) {
      return;
    }

    this.userApiService.post().pipe(first()).subscribe();

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
