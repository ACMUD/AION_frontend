import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ComponentsModule } from '../../../core/components/components.module';
import { ComponentsSharedModule } from '../../../shared/components/components.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PageUpdateUComponent } from './page-update-u/page-update-u.component';

@NgModule({
  declarations: [
    PageUpdateUComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatTooltipModule,

    ComponentsModule,
    ComponentsSharedModule,

    PagesRoutingModule,
  ],
  exports: [
    PageUpdateUComponent
  ]
})
export class PagesFeatureAutentificacionModule { }