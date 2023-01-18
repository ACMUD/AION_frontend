import { Component, OnInit, Input } from '@angular/core';

import { Universidad } from '../../models/universidad.model';

import { AppHandlerService } from '../../../shared/services/app-handler.service';
import { SelectorService } from '../../services/selector.service';

@Component({
  selector: 'university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss'],
  providers: [
    SelectorService
  ],
})

export class UniversityDetailsComponent implements OnInit {

  universidad: Universidad = <Universidad>{};

  @Input() uId: string = '';

  constructor(
      private appHandlerService: AppHandlerService,
      private selectorService: SelectorService
  ) { }

  ngOnInit () {
    this.appHandlerService.loading_bool = true;
    this.selectorService
      .getUniversidad(this.uId)
      .subscribe(
        res => {
          this.universidad = res;
        },console.error
      )
    this.appHandlerService.loading_bool = false;
  }

}