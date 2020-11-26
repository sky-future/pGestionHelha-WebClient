import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailRegisteredService {
  emails:number;
  email: BehaviorSubject<number>;
  constructor() {

    this.email = new BehaviorSubject(this.emails);

  }

  newEmail(emails : number) {
    this.email.next(emails);
  }

  getEmail() : number{
    return this.emails;
  }
}
