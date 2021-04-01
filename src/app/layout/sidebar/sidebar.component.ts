import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  title = 'Admin Panel';
  toggled: boolean=false;

  showMe() {
    this.toggled = !this.toggled;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
