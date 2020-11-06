import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../DTOs/user-dto';
import {UserRegisterApiService} from '../../services/user-register-api.service';
import {CreateUserPipe} from '../../pipes/create-user.pipe';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  //@Output() userCreated: EventEmitter<UserDto> = new EventEmitter<UserDto>();

  form: FormGroup;
  constructor(private fb:FormBuilder,  private userApi: UserRegisterApiService) {
    this.form = this.fb.group({
     // name: ['', Validators.required],
      //lastname: ['', Validators.required],
      //addresse: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      //lastConnexion:['test'],
      //admin:[1]

    });
  }


  submit() {
    //this.userCreated.emit(this.form.value);
   // var userCreated = this.createrUser();
    //this.userApi.create(this.form.value);
   // console.log('soumission du formulaire...');

    const user = this.createrUser();
    console.log('tentative ajout:', user);
    this.userApi.create(user)
      .subscribe(r => console.log('--', r));

  }

  private createrUser() : UserDto {
    return new CreateUserPipe().transform(
      this.form.value.email,
      this.form.value.password
    );
  }


}
