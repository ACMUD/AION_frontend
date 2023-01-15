import { NgModule } from '@angular/core';

import { Universidad } from './universidad.model';
import { Colaborador } from './colaborador.model';

@NgModule({
  declarations: [
    Universidad,
    Colaborador
  ],
  imports: [],
  exports: [
    Universidad,
    Colaborador
  ]
})
export class ModelsModule { }