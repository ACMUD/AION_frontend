import { Component, OnInit, Input } from '@angular/core';

import { Universidad } from '../../models/universidad.model';

import { AppHandlerService } from '../../../shared/services/app-handler.service';
import { SelectorService } from '../../services/selector.service';

import {
  AutentificacionService
} from '../../../features/feature-autentificacion/services/autentificacion.service';

@Component({
  selector: 'university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss'],
  providers: [
    SelectorService
  ],
})

export class UniversityDetailsComponent implements OnInit{

  universidad: Universidad = <Universidad>{};

  @Input() uId: string = '';

  constructor(
      private appHandlerService: AppHandlerService,
      private selectorService: SelectorService,
      private autentificacionService: AutentificacionService,
  ) { }

  private setUniversidad ( ) {
    this.appHandlerService.loading_bool = true;
    let headers = this.autentificacionService.getHeader();
    this.selectorService
      .getUniversidad(this.uId, headers)
      .subscribe(
        res => {
          this.universidad = res;
          this.appHandlerService.loading_bool = false;
        },console.error
      )
  }

  ngOnInit () {
    this.setUniversidad();
  }

  canAccion (accion: string): boolean {
    if (this.universidad && this.universidad.acciones_permitidas) {
      return this.universidad.acciones_permitidas.includes(accion);
    } else {
      return false;
    }
  }

}