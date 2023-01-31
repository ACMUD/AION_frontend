import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  StatesService
} from '../../services/states.service';
import {
  AutentificacionService
} from '../../services/autentificacion.service';

import { StatePreview } from '../../models/states.model';

@Component({
  selector: 'saved-state-details',
  templateUrl: './saved-state-details.component.html',
  styleUrls: ['./saved-state-details.component.scss'],
})

export class SavedStateDetailsComponent {

  @Input() state: StatePreview = <StatePreview>{};
  @Input() uId: string = '';

  constructor (
    private autentificacionService: AutentificacionService,
    private statesService: StatesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  useState ( ) {
    let headers = this.autentificacionService.getHeader();
    this.statesService.getState(this.uId, headers)
      .subscribe( data =>
        {
          this.router.navigate(
            ['/clasSetIn/', this.uId],
            { state: data}
          );
        }
      );
  }

}