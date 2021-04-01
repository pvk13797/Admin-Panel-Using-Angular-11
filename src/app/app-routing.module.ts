import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { BordersComponent } from './borders/borders.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { ColorsComponent } from './colors/colors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OtherComponent } from './other/other.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TablesComponent } from './tables/tables.component';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginOnlyLayoutComponent } from './layout/login-only-layout/login-only-layout.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { 
    path: 'login', 
    component: LoginOnlyLayoutComponent,
    children: [
      { path: '', component: LoginComponent}
    ]
  },

  { 
    path: 'dashboard', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent}
    ]
  },

  { path: 'tables', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: TablesComponent}
    ]
  },

  { path: 'buttons', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: ButtonsComponent}
    ]
  },

  { path: 'cards', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: CardsComponent}
    ]
  },

  { path: 'colors', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: ColorsComponent}
    ]
  },

  { path: 'borders', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: BordersComponent}
    ]
  },

  { path: 'animations', 
    component: AnimationsComponent,
    children: [
      { path: '', component: AnimationsComponent}
    ]
  },

  { path: 'other', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: OtherComponent}
    ]
  },

  { path: 'charts', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: ChartsComponent}
    ]
  },

  { path: '**', 
    component: MainLayoutComponent,
    children: [
      { path: '', component: PageNotFoundComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, DashboardComponent, TablesComponent, ButtonsComponent, CardsComponent, ColorsComponent, BordersComponent, AnimationsComponent, OtherComponent, ChartsComponent, PageNotFoundComponent]