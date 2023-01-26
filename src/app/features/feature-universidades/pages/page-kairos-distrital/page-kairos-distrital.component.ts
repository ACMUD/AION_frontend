import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MateriaDistrital } from '../../models/materias-distrital.model';
import {
  EspacioHorarioGraficable
} from '../../models/espacio-horario-graficable.model';

import {
  AIONDistritalService
} from '../../services/aion-distrital.service';

import {
  AppHandlerService
} from '../../../../shared/services/app-handler.service';

@Component({
  selector: 'aion-kairos-distrital',
  templateUrl: './page-kairos-distrital.component.html',
  styleUrls: ['./page-kairos-distrital.component.scss'],
  providers: [
    AIONDistritalService
  ]
})

export class PageKairosDistritalComponent {

  eventosDia: { [dia: string]: EspacioHorarioGraficable[]} = {};
  espaciosSelectos: { [identificador: string]: boolean} = {};

  materias: { [codigo: number]: MateriaDistrital} = {};

  private espaciosMapeo: { [dia: string]: { [hora: string]: boolean } } = {};
  cruces: {'cantidad': number, 'ubicacion': { [dia: string]: boolean }} =
    {'cantidad': 0, 'ubicacion': {}};

  constructor (
    public servicioAION: AIONDistritalService,
    private appHandlerService: AppHandlerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  calcularHora (horaStr: string): number {
    return (+horaStr.split('-')[0])-6;
  }

  recibirMaterias (materias: { [codigo: number]: MateriaDistrital}) {
    this.materias = Object.assign(materias, this.materias);
  }

  agregarEspacioHorario (dict: {'materia': string, 'grupo': string}) {
    for (let horario of this.materias[Number(dict.materia)].grupos[dict.grupo].horarios){
      const espacio =
        new EspacioHorarioGraficable(
          {
            'primario': this.materias[Number(dict.materia)].nombre,
            'secundario':
              'Grupo: ' +
              this.materias[Number(dict.materia)].grupos[dict.grupo].id
          },
          this.calcularHora(horario.hora),
          horario.datos,
          this.materias[Number(dict.materia)].color
        );
      if (!(horario.dia in this.eventosDia)) {
        this.eventosDia[horario.dia] = [];
      }
      this.eventosDia[horario.dia].push(espacio);

      if (!(horario.dia in this.espaciosMapeo)) {
        this.espaciosMapeo[horario.dia] = {};
      }
      if (!(horario.hora in this.espaciosMapeo[horario.dia])) {
        this.espaciosMapeo[horario.dia][horario.hora] = true;
      } else {
        this.cruces.cantidad += 1;
        this.cruces.ubicacion[horario.dia] = true;
      }
    }
  }

  actualizarEspacioHorario ( ) {
    this.eventosDia = {};
    this.espaciosMapeo = {};
    this.cruces = {'cantidad': 0, 'ubicacion': {}};
    for (let materiaSelecta in this.espaciosSelectos) {
      const indice = materiaSelecta.indexOf('/');
      const dict = {
        'materia': materiaSelecta.substring(0,indice),
        'grupo': materiaSelecta.substring(indice + 1)
      }
      this.agregarEspacioHorario(dict)
    }
  }

  eliminarEspacioHorario (dict: {'materia': string, 'grupo': string}) {
  }

  seleccionarGrupo (dict: {'materia': string, 'grupo': string}) {
    if ((dict.materia + '/' + dict.grupo) in this.espaciosSelectos) {
      delete this.espaciosSelectos[dict.materia + '/' + dict.grupo];
    } else {
      this.espaciosSelectos[dict.materia + '/' + dict.grupo] = true;
    }
    this.actualizarEspacioHorario();
  }

  eliminarGrupo (dict: {'materia': string, 'grupo': string}) {
    if (Number(dict.materia) in this.materias) {
      if (dict.grupo in this.materias[Number(dict.materia)].grupos) {
        delete this.materias[Number(dict.materia)].grupos[dict.grupo];
        delete this.espaciosSelectos[dict.materia + '/' + dict.grupo];
        if (Object.keys(this.materias[Number(dict.materia)].grupos).length === 0) {
          delete this.materias[Number(dict.materia)];
          this.eliminarMateriaSelecta(dict.materia);
        }
        this.actualizarEspacioHorario();
      }
    }
  }

  eliminarMateria (codigo: string) {
    if (Number(codigo) in this.materias) {
      delete this.materias[Number(codigo)];
      this.eliminarMateriaSelecta(codigo);
    }
  }

  eliminarMateriaSelecta (codigo: string) {
    for (let materiaSelecta in this.espaciosSelectos) {
      if (materiaSelecta.startsWith(codigo + '/')) {
        delete this.espaciosSelectos[materiaSelecta];
      }
    }
    this.actualizarEspacioHorario();
  }

  haySelectos ( ): boolean {
    return Object.keys(this.espaciosSelectos).length > 0
  }

  hayMaterias ( ): boolean {
    return Object.keys(this.materias).length > 0
  }

  estaAIONHabilitado ( ): boolean {
    const cantMat = Object.keys(this.materias).length;
    return cantMat > 0 && cantMat <= 10;
  }

  usarAION ( ) {
    this.appHandlerService.loading_bool = true;
    const lista = [];
    for (let materia in this.materias) {
      for (let grupo in this.materias[materia].grupos){
        lista.push({'codMat': String(materia), 'idGrp':grupo});
      }
    }
    this.servicioAION.getHorariosAION(lista)
      .subscribe( data =>
        {
          const horarios = [];
          let cantMaterias = 0;
          for (let horario of data) {
            this.eventosDia = {};
            if (cantMaterias == 0) {
              cantMaterias = horario.length;
            }
            for (let espacio of horario) {
              const dict = {
                'materia': espacio.codMat,
                'grupo': espacio.idGrp
              };
              this.agregarEspacioHorario(dict);
            }
            horarios.push(this.eventosDia);
          }
          this.router.navigate(
            ['viU/AION'],
            { state:
              {'horarios':horarios,
              'cantMaterias': cantMaterias}
            }
          );
          this.appHandlerService.loading_bool = false;
        }
      );
  }

  obtenerUbicaciones ( ): string {
    return Object.keys(this.cruces.ubicacion).join(' ');
  }

}