import { Component, OnInit } from '@angular/core';

import {
  AutentificacionService
} from '../../../features/feature-autentificacion/services/autentificacion.service';

@Component({
  selector: 'aion-choose-u',
  templateUrl: './page-choose-u.component.html',
  styleUrls: ['./page-choose-u.component.scss'],
})

export class PageChooseUComponent {

  constructor (
    private autentificacionService: AutentificacionService
  ) { }

}