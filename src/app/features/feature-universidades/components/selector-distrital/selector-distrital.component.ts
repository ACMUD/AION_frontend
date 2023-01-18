import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MateriaDistrital } from '../../models/materias-distrital.model';

@Component({
  selector: 'aion-selector-distrital',
  templateUrl: './selector-distrital.component.html',
  styleUrls: ['./selector-distrital.component.scss'],
})

export class SelectorDistritalComponent {

  indice: number = 0;

  @Input() materias: { [codigo: number]: MateriaDistrital} = {};
  @Input() espaciosSelectos: { [identificador: string]: Boolean} = {};
  @Output() seleccionarGrupo =
    new EventEmitter<{'materia': string, 'grupo': string}> ( );
  @Output() eliminarGrupo =
    new EventEmitter<{'materia': string, 'grupo': string}> ( );
  @Output() eliminarMateria = new EventEmitter<string> ( );
  constructor ( ) { }

  setIndice (indice: number) {
    this.indice = indice;
  }

  estaSelecto (dict: {'materia': string, 'grupo': string}): boolean {
    return (dict.materia + '/' + dict.grupo) in this.espaciosSelectos;
  }

}