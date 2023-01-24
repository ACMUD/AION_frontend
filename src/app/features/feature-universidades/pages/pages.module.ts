import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ComponentsFeatureUniversidadesModule } from '../components/components.module';
import { ComponentsSharedModule } from '../../../shared/components/components.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PageKairosDistritalComponent } from './page-kairos-distrital/page-kairos-distrital.component';
import { PageViewAIONComponent } from './page-view-aion/page-view-aion.component';

@NgModule({
  declarations: [
    PageKairosDistritalComponent,
    PageViewAIONComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ComponentsFeatureUniversidadesModule,
    ComponentsSharedModule,

    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,

    PagesRoutingModule,
  ],
  exports: [
    PageKairosDistritalComponent,
    PageViewAIONComponent
  ]
})
export class PagesFeatureUniversidadesModule { }