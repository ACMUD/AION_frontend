import { Component, OnInit, Input } from '@angular/core';

import { Universidad } from '../../models/universidad.model';

@Component({
  selector: 'university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss'],
})

export class UniversityDetailsComponent {

  @Input() universidad: Universidad = <Universidad>{};

  constructor( ) { }

  canAccion (accion: string): boolean {
    if (this.universidad && this.universidad.acciones_permitidas) {
      return this.universidad.acciones_permitidas.includes(accion);
    } else {
      return false;
    }
  }

}