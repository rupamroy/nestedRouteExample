import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/projects', pathMatch: 'full'
  },
  {
    path: '*', component: PageNotFoundComponent
  },
  {
    path: 'projects',
    loadChildren: 'app/project/project.module#ProjectModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
