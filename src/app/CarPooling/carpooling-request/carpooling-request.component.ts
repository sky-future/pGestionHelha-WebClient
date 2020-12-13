import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../commons/components/types/menu-item';

@Component({
  selector: 'app-carpooling-request',
  templateUrl: './carpooling-request.component.html',
  styleUrls: ['./carpooling-request.component.css']
})
export class CarpoolingRequestComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
