import { Component, Input } from '@angular/core';

import { Colaborador } from '../../models/colaborador.model';

@Component({
  selector: 'aion-about-partner',
  templateUrl: './about-partner.component.html',
  styleUrls: ['./about-partner.component.scss'],
})

export class AboutPartnerComponent {

  @Input() colaborador: Colaborador = <Colaborador>{};

  constructor ( ) { }
}