import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;
  private username: string;
  private password: string;

  constructor() {
      this.isLoggedIn=false;
   }

   login(username: string, password:string) {
     this.isLoggedIn = true;
     this.username=username;
     this.password=password;
     return of(this.isLoggedIn);
   }

   isUserLoggedIn(): boolean {
     return this.isLoggedIn;
   }

   isAdminUser(): boolean {
     if(this.username === 'admin' && this.password === 'admin') {
       return true;
    }  
     return false;
   }

   logoutUser(): void {
     this.isLoggedIn = false;
   }
}
