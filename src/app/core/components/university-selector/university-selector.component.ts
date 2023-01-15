import { Component, OnInit } from '@angular/core';

import { Universidad } from '../../models/universidad.model';

import { AppHandlerService } from '../../../shared/services/app-handler.service';
import { SelectorService } from '../../services/selector.service';

@Component({
  selector: 'university-selector',
  templateUrl: './university-selector.component.html',
  styleUrls: ['./university-selector.component.scss'],
  providers: [
    SelectorService
  ],
})

export class UniversitySelectorComponent implements OnInit {

  public universidades: Universidad[] = [];

  constructor(
      private appHandlerService: AppHandlerService,
      private selectorService: SelectorService
  ){ }

  ngOnInit () {
    this.appHandlerService.loading_bool = true;
    this.selectorService
      .getUniversidades()
      .subscribe( ( universidades: Universidad[] ) => {
        this.universidades = universidades;
      },console.error);
    this.appHandlerService.loading_bool = false;
  }

}