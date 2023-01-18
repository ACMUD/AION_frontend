import { NgModule } from '@angular/core';

import { GrupoDistrital, MateriaDistrital } from './materias-distrital.model';
import { Horario } from './horario.model';
import { EspacioHorarioGraficable } from './espacio-horario-graficable.model';

@NgModule({
  declarations: [
    GrupoDistrital,
    MateriaDistrital,
    Horario,
    EspacioHorarioGraficable
  ],
  imports: [],
  exports: [
    GrupoDistrital,
    MateriaDistrital,
    Horario,
    EspacioHorarioGraficable
  ]
})
export class ModelsFeatureUniversidadesModule { }