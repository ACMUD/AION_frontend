import { Component, Input } from '@angular/core';

import { Proyecto } from '../../models/colaborador.model';

@Component({
  selector: 'aion-about-projects',
  templateUrl: './about-projects.component.html',
  styleUrls: ['./about-projects.component.scss'],
})

export class AboutProjectsComponent {

  indice: number = 0;

  @Input() proyectos: Proyecto[] = [];

  constructor ( ) { }

  setIndice(indice: number) {
    this.indice = indice;
  }
}