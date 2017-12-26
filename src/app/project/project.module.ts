import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';
import { ReviewModule } from './review/review.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReviewModule
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
