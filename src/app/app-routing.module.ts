import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { BordersComponent } from './borders/borders.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { ColorsComponent } from './colors/colors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OtherComponent } from './other/other.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tables', component: TablesComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'colors', component: ColorsComponent},
  { path: 'borders', component: BordersComponent},
  { path: 'animations', component: AnimationsComponent},
  { path: 'other', component: OtherComponent},
  { path: 'charts', component: ChartsComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HeaderComponent, FooterComponent, SidebarComponent, DashboardComponent, TablesComponent, ButtonsComponent, CardsComponent, ColorsComponent, BordersComponent, AnimationsComponent, OtherComponent, ChartsComponent, PageNotFoundComponent]