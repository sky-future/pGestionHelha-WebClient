import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {UserAuthenticateDto} from '../../../DTOs/user-authenticate-dto';
import {AlertService} from '../../../services/alert.service';
import {first} from 'rxjs/operators';
import {sha256} from 'js-sha256';


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


  constructor(
    private authenticationService: AuthenticationService,
    public fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,) {

  }

  formModel = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  dialog() {

    //Opens register and closes login
    this.authenticationService.openRegisterModal();

  }


  onSubmit() {
    var password = this.formModel.value.password;
    password = sha256(password);

    this.userLogin = this.userService.createUserLogin(this.formModel.value.email, password);

    this.authenticationService.closeLoginModal();

    this.userService.login(this.userLogin).pipe(first())
      .subscribe(
        async data => {
          //Todo fermer le modal quand un utilisateur se connect avec un user et profil
          if (this.userService.userValue.profile != 0) {
            //T'as déchiré

            await this.router.navigate(['/home']);
            location.reload();
          } else {
            await this.authenticationService.openCreateProfileModal();
          }
        },
        error => {
          alert(error.error.message);
          this.loading = false;
        });
  }

}
