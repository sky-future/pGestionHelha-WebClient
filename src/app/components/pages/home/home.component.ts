import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gridColumns = 3;


  toggleGridColumns(){
    this.gridColumns = this.gridColumns === 3 ? 2 : 3;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
