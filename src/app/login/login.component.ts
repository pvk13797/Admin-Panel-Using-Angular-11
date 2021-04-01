import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Signin';

  username: string;
  password: string;

  signInForm: FormGroup;
  submitted = false;

  login() {

    // console.log(this.signInForm.value.username, this.signInForm.value.password);

    if(this.signInForm.value.username === 'admin' && this.signInForm.value.password === 'admin') {
      this.router.navigate(["dashboard"]);
    }
    else {
      alert("Invalid credentials");
    } 
  }

  constructor(private router: Router, private fb: FormBuilder) { }

  get f() {
    return this.signInForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
    }

  }

  ngOnInit(): void {

    this.signInForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]]
    });
    
  }

}
