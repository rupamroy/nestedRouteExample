import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ExceptionsComponent } from './review/exceptions/exceptions.component';
import { PoliciesComponent } from './review/policies/policies.component';

const routes: Routes = [
{
  path: 'review',
  component: ExceptionsComponent
},{
  path: 'review/policies',
  component: PoliciesComponent
},{
  path: '',
  loadChildren: 'app/project/home/home.module#HomeModule'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
