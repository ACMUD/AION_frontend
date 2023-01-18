import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-2-cods-concat',
  templateUrl: './form-2-cods-concat.component.html',
  styleUrls: ['./form-2-cods-concat.component.scss'],
})

export class Form2CodsConcatComponent {
  codigoMat: number = 0;
  grupoId: string = '';

  @Output() emitirFiltro = new EventEmitter<any>();
  constructor ( ) { }

  filtrar() {
    const filtro = {
        'materia': this.codigoMat,
        'grupo': this.grupoId};
    this.emitirFiltro.emit(filtro); 
  }

}