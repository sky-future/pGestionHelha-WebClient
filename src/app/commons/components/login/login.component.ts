import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {UserAuthenticateDto} from '../../../DTOs/user-authenticate-dto';
import {AlertService} from '../../../services/alert.service';
import {first} from 'rxjs/operators';
import {sha256} from 'js-sha256';
import {ProfileService} from '../../../services/profile.service';
import {ProfileDtoOutput} from '../../../DTOs/profile-dto-output';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//TODO Modifier pour adapter a notre code
export class LoginComponent implements OnInit {


  private userLogin: UserAuthenticateDto;
  private loading = false;
  private submitted = false;
  private profile: ProfileDtoOutput;


  constructor(
    private authenticationService: AuthenticationService,
    public fb : FormBuilder,
    private router : Router,
    private userService : UserService,
    private alertService : AlertService,
    private profileService : ProfileService) {


  }

  formModel = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  ngOnInit() {
    // if (localStorage.getItem('user') != null)
    //   this.router.navigateByUrl('/home');


  }

  dialog() {

    //Opens register and closes login
    this.authenticationService.openRegisterModal();

  }


  onSubmit() {
    var password = this.formModel.value.password;
    password = sha256(password);
    this.userLogin = this.userService.createUserLogin(this.formModel.value.email, password);


      this.userService.login(this.userLogin).pipe(first())
        .subscribe(
          data => {
            this.authenticationService.closeLoginModal();
            this.router.navigate(['/home']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
  }

}
