import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExceptionListComponent } from './exception-list/exception-list.component';
import { ExceptionComponent } from './exception/exception.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
},{
  path: 'exception',
  component: ExceptionListComponent
}, {
  path: 'exception/:id',
  component: ExceptionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
