import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin';

  toggled: boolean=false;

  showMe() {
    this.toggled = !this.toggled;
  }

  ngOnInit() {

/*    $("#sidebarToggleTop").on('click', function() {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  });  */
 
}}
