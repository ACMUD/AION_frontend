import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

import { PanelUsuarioAnonimoComponent } from './panel-usuario-anonimo/panel-usuario-anonimo.component';
import { PanelInicioSesionComponent } from './panel-inicio-sesion/panel-inicio-sesion.component';
import { PanelUsuarioAutenticadoComponent } from './panel-usuario-autenticado/panel-usuario-autenticado.component';

@NgModule({
  declarations: [
    PanelUsuarioAnonimoComponent,
    PanelInicioSesionComponent,
    PanelUsuarioAutenticadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,

    RouterModule,
  ],
  exports: [
    PanelUsuarioAnonimoComponent,
    PanelInicioSesionComponent,
    PanelUsuarioAutenticadoComponent
  ]
})
export class ComponentsFeatureAutentificacionModule { }