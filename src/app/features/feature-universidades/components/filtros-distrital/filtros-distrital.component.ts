import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MateriaDistrital, GrupoDistrital } from '../../models/materias-distrital.model';
import { Horario } from '../../models/horario.model';
import { FiltrosDistritalService } from '../../services/filtros-distrital.service';

@Component({
  selector: 'aion-filtros-distrital',
  templateUrl: './filtros-distrital.component.html',
  styleUrls: ['./filtros-distrital.component.scss'],
  providers: [
    FiltrosDistritalService
  ]
})

export class FiltrosDistritalComponent {

  @Input() materias: { [codigo: number]: MateriaDistrital} = {};
  @Output() emitirMaterias =
      new EventEmitter<{ [codigo: number]: MateriaDistrital}>();
  @Output() errorHandler =
      new EventEmitter<string>();
  constructor (private servicioFiltros: FiltrosDistritalService) { }

  agregarMateriasDesdeDictCodId(dict: any){
    try {
      if (dict.grupo) {
        this.servicioFiltros
            .getHorariosGrupo(dict.materia, dict.grupo)
            .subscribe(
              data => {
                  const horarios: Horario[] = [];
                  const dataGrupo = {'facultad': '', 'proyecto': '', 'materia': ''};
                  for (let horario of data) {
                    horarios.push(
                        new Horario(
                          horario.dia,
                          horario.hora,
                          horario['sede edificio salon docente']
                        )
                    );
                    dataGrupo.facultad = horario.facultad;
                    dataGrupo.proyecto = horario['proyecto curricular'];
                    dataGrupo.materia = horario['espacio academico'];
                  }
                  const grupo =
                    new GrupoDistrital(
                        dict.grupo,
                        dataGrupo.facultad,
                        dataGrupo.proyecto,
                        horarios
                    );

                  if (!(dict.materia in this.materias)) {
                    this.materias[dict.materia] =
                        new MateriaDistrital(
                          dict.materia,
                          dataGrupo.materia,
                          {}
                        );
                  }
                  this.materias[dict.materia].grupos[dict.grupo] = grupo;
                  this.emitirMaterias.emit(this.materias);
              },error => {
                  const mensaje =
                    'El sistema presentó un error al enviar los datos al ' +
                    'servidor, verifique que el codigo de la materia (o el ' +
                    'identificador de grupo) sea(n) correcto(s).';
                  this._errorHandler(mensaje);
              }
            );

      } else {
        this.servicioFiltros
            .getHorariosMateria(dict.materia)
            .subscribe(
              data => {
                  const grupos: { [id: string]: GrupoDistrital } = {};
                  for (let grupo of data.grupos) {
                    const horarios: Horario[] = [];
                    const dataGrupo = {'facultad': '', 'proyecto': ''};
                    for (let horario of grupo.horarios) {
                        horarios.push(
                          new Horario(
                              horario.dia,
                              horario.hora,
                              horario['sede edificio salon docente']
                          )
                        );
                        dataGrupo.facultad = horario.facultad;
                        dataGrupo.proyecto = horario['proyecto curricular'];
                    }
                    grupos[grupo.id] =
                        new GrupoDistrital(
                          grupo.id,
                          dataGrupo.facultad,
                          dataGrupo.proyecto,
                          horarios
                        );
                  }
                  this.materias[dict.materia] =
                        new MateriaDistrital(
                          dict.materia,
                          data.nombre,
                          grupos);
                  this.emitirMaterias.emit(this.materias);
              },error => {
                  const mensaje =
                    'El sistema presentó un error al enviar los datos al ' +
                    'servidor, verifique que el codigo de la materia (o el ' +
                    'identificador de grupo) sea(n) correcto(s).';
                  this._errorHandler(mensaje);
              }
            );
      }
    } catch ( error ) {
        const mensaje =
          'El sistema presentó un error al enviar los datos al ' +
          'servidor, verifique que el codigo de la materia (o el ' +
          'identificador de grupo) sea(n) correcto(s).';
        this._errorHandler(mensaje);
    }
  }

  private _errorHandler (mensaje: string) {
    alert(mensaje);
    console.log(mensaje);
    this.errorHandler.emit(mensaje);
  }

}