import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent, DetailComponent } from './pages';

/* Use a variable for detail routes,
   as they need to be added to the route
   map in 2 places (see below)... */
const detailRoutes = [
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full'
  },
  {
    path: 'master',
    component: MasterComponent,
    children: [
      // Mobile 'Detail' Routes
      // are children of the master...
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'detail/1'
      },
      ...detailRoutes
    ]
  },
  // Desktop 'Detail' Routes
  // are siblings of the master...
  ...detailRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
