import { NgModule } from '@angular/core';

import { FiltrosDistritalService } from './filtros-distrital.service';
import { AIONDistritalService } from './filtros-distrital.service';

@NgModule({
  providers: [
    FiltrosDistritalService,
    AIONDistritalService
  ],
  imports: [],
  exports: []
})
export class ServicesModule { }