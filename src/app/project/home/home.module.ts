import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExceptionComponent } from './exception/exception.component';
import { ExceptionListComponent } from './exception-list/exception-list.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [DashboardComponent, ExceptionComponent, ExceptionListComponent]
})
export class HomeModule { }
