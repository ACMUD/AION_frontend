import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Universidad } from '../../models/universidad.model';
import { StatePreview } from '../../../features/feature-autentificacion/models/states.model';

import { SelectorService } from '../../services/selector.service';
import {
  AutentificacionService
} from '../../../features/feature-autentificacion/services/autentificacion.service';
import {
  StatesService
} from '../../../features/feature-autentificacion/services/states.service';

@Component({
  selector: 'aion-university-panel',
  templateUrl: './page-university-panel.component.html',
  styleUrls: ['./page-university-panel.component.scss'],
  providers: [
    SelectorService,
    StatesService
  ],
})

export class PageUniversityPanelComponent implements OnInit {

  universidad: Universidad = <Universidad>{};
  state_preview: StatePreview = <StatePreview>{};
  uId: string = '';

  constructor(
      private selectorService: SelectorService,
      private autentificacionService: AutentificacionService,
      private statesService: StatesService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  redirectToNotFound () {
    this.router.navigate(['U-UnfoUnd']);
  }

  private setUniversidad ( ) {
    let headers = this.autentificacionService.getHeader();
    this.selectorService
      .getUniversidad(this.uId, headers)
      .subscribe(
        res => {
          this.universidad = res;
          if (this.canAccion('PERSONAL')) {
            this.statesService
              .getPreview(this.uId, headers)
              .subscribe(
                res => {
                  this.state_preview = res;
                }, console.error
              );
          }
        }, error => {
          this.redirectToNotFound();
        }
      );
  }

  ngOnInit () {
    const uId = this.route.snapshot.paramMap.get('id');
    if ( !uId ){
      this.redirectToNotFound();
      return;
    }

    this.uId = uId;

    try{
      this.setUniversidad();
    } catch ( error ) {
        this.redirectToNotFound();
    }
  }

  canAccion (accion: string): boolean {
    if (this.universidad && this.universidad.acciones_permitidas) {
      return this.universidad.acciones_permitidas.includes(accion);
    } else {
      return false;
    }
  }

}