import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/auth.service';

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

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

}
