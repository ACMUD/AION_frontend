import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ComponentsSharedModule } from '../../../shared/components/components.module';

import { SelectorDistritalComponent } from './selector-distrital/selector-distrital.component';
import { FiltrosDistritalComponent } from './filtros-distrital/filtros-distrital.component';
import { Form2CodsConcatComponent } from './form-2-cods-concat/form-2-cods-concat.component';
import { FormStepConcatComponent } from './form-step-concat/form-step-concat.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    SelectorDistritalComponent,
    FiltrosDistritalComponent,
    Form2CodsConcatComponent,
    FormStepConcatComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatStepperModule,

    ComponentsSharedModule,

    RouterModule,
  ],
  exports: [
    SelectorDistritalComponent,
    FiltrosDistritalComponent,
    Form2CodsConcatComponent,
    FormStepConcatComponent,
    ScheduleComponent
  ]
})
export class ComponentsFeatureUniversidadesModule { }