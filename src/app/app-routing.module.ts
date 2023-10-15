import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DefaultDashboardComponent } from './components/default-dashboard/default-dashboard.component';
import { InsideDashboardComponent } from './components/inside-dashboard/inside-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard',
   component: DashboardComponent,
    children: [
      {path: '', component: DefaultDashboardComponent},
      {path: 'inside', component: InsideDashboardComponent}
    ] 
},
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
