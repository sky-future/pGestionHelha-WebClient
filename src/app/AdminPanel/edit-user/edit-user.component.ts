import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup;
  userId : number;
  usersId : string;

  constructor(private formBuilder : FormBuilder,
              private router : Router,
              private userService : UserService
               ) { }

 async ngOnInit() {

    this.usersId  = window.localStorage.getItem("editUserId");
    if(!this.usersId){
      alert("invalid action. ")
      this.router.navigate(['list-users']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id : ['', Validators.required],
      mail: ['', Validators.required],
      password : ['', Validators.required],
      lastConnexion : ['', Validators.required],
      admin : ['', Validators.required]
    });

    this.userService.getUserById(+this.usersId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
  this.userId = Number(this.usersId);
  this.userService.updateUserById(this.userId,this.editForm.value)
    .pipe(first())
    .subscribe();

  }
}
