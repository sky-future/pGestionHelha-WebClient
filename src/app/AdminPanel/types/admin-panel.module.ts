import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddUserComponent} from '../add-user/add-user.component';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {ListUserComponent} from '../list-user/list-user.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonsModule} from '../../commons/components/types/commons.module';


@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonsModule
  ],
  exports : [
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ]
})
export class AdminPanelModule { }
