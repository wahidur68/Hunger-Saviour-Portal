import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'restaurants',
        component: RestaurantListComponent
      },
      {
        path:'',
        redirectTo:'restaurants',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
