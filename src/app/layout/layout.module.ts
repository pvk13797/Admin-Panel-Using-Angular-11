import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginOnlyLayoutComponent } from './login-only-layout/login-only-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],

  exports: [
    MainLayoutComponent,
    LoginOnlyLayoutComponent
  ],

  declarations: [
    LoginOnlyLayoutComponent, 
    MainLayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ]
})
export class LayoutModule { }
