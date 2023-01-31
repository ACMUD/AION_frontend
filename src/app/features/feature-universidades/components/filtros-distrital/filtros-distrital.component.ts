import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MateriaDistrital, GrupoDistrital } from '../../models/materias-distrital.model';
import { Horario } from '../../models/horario.model';
import { FiltrosDistritalService } from '../../services/filtros-distrital.service';
import { AppHandlerService } from '../../../../shared/services/app-handler.service';

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
  constructor (
    private servicioFiltros: FiltrosDistritalService,
    private appHandlerService: AppHandlerService,
  ) {
    try{
      const state_filtros: string[][] = window.history.state.filtros;
      for (let filtro of state_filtros) {
        const dict = {'materia': filtro[0],'grupo': filtro[1]};
        this.agregarMateriasDesdeDictCodId(dict);
      }
    } catch ( error ) {
    }
  }

  private _errorHandler (mensaje: string) {
    alert(mensaje);
    console.log(mensaje);
    this.errorHandler.emit(mensaje);
  }

  async agregarMateriasDesdeDictCodId (dict: any) {
    try {
      this.appHandlerService.loading_bool = true;
      if (dict.grupo) {
        await this.servicioFiltros
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
                  this.appHandlerService.loading_bool = false;
              },error => {
                this.appHandlerService.loading_bool = false;
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
                  this.appHandlerService.loading_bool = false;
              },error => {
                this.appHandlerService.loading_bool = false;
                const mensaje =
                    'El sistema presentó un error al enviar los datos al ' +
                    'servidor, verifique que el codigo de la materia (o el ' +
                    'identificador de grupo) sea(n) correcto(s).';
                this._errorHandler(mensaje);
              }
            );
      }
    } catch ( error ) {
      this.appHandlerService.loading_bool = false;
      const mensaje =
          'El sistema presentó un error al enviar los datos al ' +
          'servidor, verifique que el codigo de la materia (o el ' +
          'identificador de grupo) sea(n) correcto(s).';
      this._errorHandler(mensaje);
    }
  }

  async agregarMateriasSoloConFacultad (facultadString: string) {
    try {
      this.appHandlerService.loading_bool = true;
      await this.servicioFiltros
        .getHorariosFacultades()
        .subscribe(
          data => {
            for (let facultadDict of data) {
              if (facultadDict.nombre == facultadString) {
                for (let grupoList of facultadDict.par_grupos) {
                  const grupoDict = {
                    'materia': grupoList[0],
                    'grupo': grupoList[1]};
                  this.agregarMateriasDesdeDictCodId(grupoDict);
                }
              }
            }
            this.appHandlerService.loading_bool = false;
          }, error => {
            this.appHandlerService.loading_bool = false;
            const mensaje =
              'El sistema presentó un error el filtro al ' +
              'servidor, verifique que no haya contradicciones ' +
              'en los parametros.';
            this._errorHandler(mensaje);
          });
    } catch ( error ) {
      this.appHandlerService.loading_bool = false;
      const mensaje =
          'El sistema presentó un error el filtro al ' +
          'servidor, verifique que no haya contradicciones ' +
          'en los parametros.';
      this._errorHandler(mensaje);
    }
  }

  async agregarMateriasSoloConProyecto (proyectoString: string) {
    try {
      this.appHandlerService.loading_bool = true;
      await this.servicioFiltros
        .getHorariosProyectos()
        .subscribe(
          data => {
            for (let proyectosDict of data) {
              if (proyectosDict.nombre == proyectoString) {
                for (let grupoList of proyectosDict.par_grupos) {
                  const grupoDict = {
                    'materia': grupoList[0],
                    'grupo': grupoList[1]};
                  this.agregarMateriasDesdeDictCodId(grupoDict);
                }
              }
            }
            this.appHandlerService.loading_bool = false;
          }, error => {
            this.appHandlerService.loading_bool = false;
            const mensaje =
              'El sistema presentó un error el filtro al ' +
              'servidor, verifique que no haya contradicciones ' +
              'en los parametros.';
            this._errorHandler(mensaje);
          });
    } catch ( error ) {
      this.appHandlerService.loading_bool = false;
      const mensaje =
          'El sistema presentó un error el filtro al ' +
          'servidor, verifique que no haya contradicciones ' +
          'en los parametros.';
      this._errorHandler(mensaje);
    }
  }

  async agregarMateriasConFacultad (dict: any) {
    try {
      this.appHandlerService.loading_bool = true;
      await this.servicioFiltros
        .getHorariosFacultades()
        .subscribe(
          data => {
            for (let facultadDict of data) {
              if (facultadDict.nombre == dict.facultad) {
                for (let grupoList of facultadDict.par_grupos) {
                  if (grupoList[0] == dict.materia) {
                    const grupoDict = {
                      'materia': grupoList[0],
                      'grupo': grupoList[1],
                      'facultad': dict.facultad}; //dummy, para futuras modificaciones
                    this.agregarMateriasDesdeDictCodId(grupoDict);
                  }
                }
              }
            }
            this.appHandlerService.loading_bool = false;
          }, error => {
            this.appHandlerService.loading_bool = false;
            const mensaje =
              'El sistema presentó un error el filtro al ' +
              'servidor, verifique que no haya contradicciones ' +
              'en los parametros.';
            this._errorHandler(mensaje);
          });
    } catch ( error ) {
      this.appHandlerService.loading_bool = false;
      const mensaje =
          'El sistema presentó un error el filtro al ' +
          'servidor, verifique que no haya contradicciones ' +
          'en los parametros.';
      this._errorHandler(mensaje);
    }
  }

  async agregarMateriasConProyecto (dict: any) {
    try {
      this.appHandlerService.loading_bool = true;
      await this.servicioFiltros
        .getHorariosProyectos()
        .subscribe(
          data => {
            for (let proyectoDict of data) {
              if (proyectoDict.nombre == dict.proyecto) {
                for (let grupoList of proyectoDict.par_grupos) {
                  if (grupoList[0] == dict.materia) {
                    const grupoDict = {
                      'materia': grupoList[0],
                      'grupo': grupoList[1],
                      'proyecto': dict.proyecto}; //dummy, para futuras modificaciones
                    this.agregarMateriasDesdeDictCodId(grupoDict);
                  }
                }
              }
            }
            this.appHandlerService.loading_bool = false;
          }, error => {
            this.appHandlerService.loading_bool = false;
            const mensaje =
              'El sistema presentó un error el filtro al ' +
              'servidor, verifique que no haya contradicciones ' +
              'en los parametros.';
            this._errorHandler(mensaje);
          });
    } catch ( error ) {
      this.appHandlerService.loading_bool = false;
      const mensaje =
          'El sistema presentó un error el filtro al ' +
          'servidor, verifique que no haya contradicciones ' +
          'en los parametros.';
      this._errorHandler(mensaje);
    }
  }

}