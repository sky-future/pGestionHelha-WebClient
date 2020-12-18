import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserDto} from '../../DTOs/user-dto';
import {AdminPanelPipe} from '../pipes/admin-panel.pipe';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;
  private _userDto: UserDto;
  private connectedUser;


  constructor(private formBuilder : FormBuilder,
              private router : Router,
              private userService : UserService) { }

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
      admin : ['', Validators.required],
    })
  }

  userAdmin (): boolean{
    if(this.addForm.value.admin = 1){
      return true;
    }
    return false;
  }

 onSubmit() {

    let userAdmin = this.userAdmin();

  let connectedUser = this.userService.userValue.id;

    this._userDto = new AdminPanelPipe().transform(
      connectedUser,
      this.addForm.value.email,
      this.addForm.value.password,
      "today",
      userAdmin
    )

    this.userService.createAdminUser(this._userDto)
      .subscribe();

    this.router.navigate(['list-users'])
  }
}
