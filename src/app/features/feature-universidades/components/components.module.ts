import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SelectorDistritalComponent } from './selector-distrital/selector-distrital.component';
import { FiltrosDistritalComponent } from './filtros-distrital/filtros-distrital.component';
import { Form2CodsConcatComponent } from './form-2-cods-concat/form-2-cods-concat.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    SelectorDistritalComponent,
    FiltrosDistritalComponent,
    Form2CodsConcatComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,

    RouterModule,
  ],
  exports: [
    SelectorDistritalComponent,
    FiltrosDistritalComponent,
    Form2CodsConcatComponent,
    ScheduleComponent
  ]
})
export class ComponentsFeatureUniversidadesModule { }