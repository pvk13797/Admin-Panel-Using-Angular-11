import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Sign-in';

  invalidCredentialMsg: string;
  username: string;
  password: string;
  retUrl: string="login";
  submitted = false;

  /* signInForm: FormGroup;
  

  login() {

    // console.log(this.signInForm.value.username, this.signInForm.value.password);

    if(this.signInForm.value.username === 'admin' && this.signInForm.value.password === 'admin') {
      this.router.navigate(["dashboard"]);
    }
    else {
      alert("Invalid credentials");
    } 
  }  */

  constructor(private router: Router, 
              private fb: FormBuilder, 
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }

  /* get f() {
    return this.signInForm.controls;
  } */

  ngOnInit(): void {

    /* this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]]
    }); */

    this.activatedRoute.queryParamMap.subscribe(params => {
      this.retUrl = params.get('retUrl');
      console.log('LoginComponent/ngOnInit'+ this.retUrl);
    });
    
  }

  onFormSubmit(loginForm) {

    this.submitted = true;

    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
      console.log( 'return to ' + this.retUrl);
      console.log(loginForm.value.username, loginForm.value.password);

      if (this.retUrl != null) {
        this.router.navigate([this.retUrl]);
      }
      else {
        this.router.navigate(['dashboard']);
      }
    });

    /* if (this.signInForm.invalid) {
      return;
    } */

  }

}
