import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carpooling-profile',
  templateUrl: './carpooling-profile.component.html',
  styleUrls: ['./carpooling-profile.component.css']
})
export class CarpoolingProfileComponent implements OnInit {
  @ViewChild('street') street: ElementRef;
  @ViewChild('number') number: ElementRef;
  @ViewChild('postalCode') postalCode: ElementRef;
  @ViewChild('city') city: ElementRef;
  @ViewChild('country') country: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
