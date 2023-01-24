import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule,
  ],
  exports: [
    LoadingComponent
  ]
})
export class ComponentsSharedModule { }