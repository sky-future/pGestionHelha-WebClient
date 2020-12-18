import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserDto, UserList} from '../../DTOs/user-dto';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  userList : UserList;

  constructor(private router : Router,
              private userService : UserService ) { }

 async ngOnInit() {

    this.userList = await this.userService.getUsers();

  }

  addUser() {
    this.router.navigate(['add-user'])
  }

  deleteUser(user : UserDto) {
      this.userService.deleteUserById(user.id)
        .subscribe(data =>{
          this.userList = this.userList.filter(u => u !== user);
        })
  }

  editUser(user : UserDto) {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);

  }
}
