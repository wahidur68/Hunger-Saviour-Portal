import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:()=> import('./auth/auth.module').then(authmodule=>authmodule.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren:()=> import('./dashboard/dashboard.module').then(dashboardhmodule=>dashboardhmodule.DashboardModule)
  },
  {
    path:'',
    redirectTo: '/auth',
    pathMatch: 'full'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }