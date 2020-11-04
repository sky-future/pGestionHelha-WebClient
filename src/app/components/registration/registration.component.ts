import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../DTOs/user-dto';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  @Output() userCreated: EventEmitter<UserDto> = new EventEmitter<UserDto>();

  form: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      addresse: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }


  submit() {
    this.userCreated.emit(this.form.value);
  }
}
