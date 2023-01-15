import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import * as jsPDF from "jspdf";
import html2canvas from 'html2canvas';









/*
import { UniversidadApiService } from './universidad/universidad-api.service';
import { FiltrosApiService } from './universidad/filtros-api.service';
import { AdministracionHorariosApiService } from './administracion/administracion-horarios.service';

import { UniversidadesComponent } from './universidad/universidades.component';
import { UniversidadDetalleComponent } from './universidad/universidad-detalle.component';
import { FiltrosComponent } from './universidad/filtros.component';
import { MateriaArbolComponent } from './universidad/filtro-materias.component';
import { HorarioCreadorComponent } from './universidad/schedule-build.component';
import { HorarioComponent } from './universidad/schedule.component';
import { HorarioVisorAIONComponent } from './universidad/schedule-view-AION.component';
import { AdministracionHorariosComponent } from './administracion/administracion-horarios.component';
*/









import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './core/components/components.module';
import { PagesModule } from './core/pages/pages.module';
import { ServicesModule } from './shared/services/services.module';









/*
import { API_URL } from './env';

import { PagesFeatureUniversidadesModule } from './features/feature-universidades/pages/pages.module';
*/










@NgModule({
  declarations: [
    AppComponent,









/*
    AdministracionHorariosComponent,
    UniversidadesComponent,
    UniversidadDetalleComponent,
    FiltrosComponent,
    MateriaArbolComponent,
    HorarioCreadorComponent,
    HorarioComponent,
    HorarioVisorAIONComponent,
*/








  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatToolbarModule,
    MatTreeModule,

    NgbModalModule,
    ReactiveFormsModule,

    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

    ComponentsModule,
    PagesModule,
    ServicesModule,










/*
    PagesFeatureUniversidadesModule,
*/











    AppRoutingModule,
  ],
  providers: [
    ServicesModule,








/*
    AdministracionHorariosApiService,
    UniversidadApiService,
    FiltrosApiService,
*/









  ],
  bootstrap: [AppComponent]
})
export class AppModule { }