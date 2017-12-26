import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionsComponent } from './exceptions/exceptions.component';
import { PoliciesComponent } from './policies/policies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExceptionsComponent, PoliciesComponent]
})
export class ReviewModule { }
