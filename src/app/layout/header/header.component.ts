import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggled: boolean=false;

  showMe() {
    this.toggled = !this.toggled;
    console.log(this.toggled);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
