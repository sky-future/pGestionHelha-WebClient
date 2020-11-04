import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from '../../interfaces/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'register',
      icon: 'login',
      path: '/register',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Pricing',
      icon: 'attach_money',
      path: '/login',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
