import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, EMPTY } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { FiltrosDistritalService } from '../../services/filtros-distrital.service';

@Component({
  selector: 'form-step-concat',
  templateUrl: './form-step-concat.component.html',
  styleUrls: ['./form-step-concat.component.scss'],
})

export class FormStepConcatComponent implements OnInit {

  private facultadesServidor: any = {};
  private proyectosServidor: any = {};

  facultadesControl = new FormControl('');
  facultadesCliente: string[] = [];
  facultadesFiltradas: Observable<string[]> = EMPTY;
  facultadSelecta: string = '';

  proyectosControl = new FormControl('');
  proyectosCliente: string[] = [];
  proyectosFiltrados: Observable<string[]> = EMPTY;
  proyectoSelecto: string = '';

  materiasControl = new FormControl('');
  materiasCliente: string[] = [];
  materiasFiltradas: Observable<string[]> = EMPTY;
  materiaSelecta: string = '';

  @Output() emitirFiltroFacultad = new EventEmitter<string>();
  @Output() emitirFiltroProyecto = new EventEmitter<string>();
  @Output() emitirFiltroMateria = new EventEmitter<any>();
  @Output() emitirFiltroMateriaFacultad = new EventEmitter<any>();
  @Output() emitirFiltroMateriaProyecto = new EventEmitter<any>();
  constructor (
    private servicioFiltros: FiltrosDistritalService
  ) {
    this.servicioFiltros
      .getFacultades()
      .subscribe(
        data => {
          this.facultadesServidor = data;
          this.facultadesCliente = Object.keys(data);
        });
    this.servicioFiltros
      .getProyectos()
      .subscribe(
        data => {
          this.proyectosServidor = data;
          this.proyectosCliente = Object.keys(data);
          this.setMaterias();
        });
  }

  setMaterias ( ) {
    if (!this.proyectoSelecto) {
      this.materiasCliente = [];
      let materiasCliente = new Set();
      for (let materias in this.proyectosServidor) {
        for (let materia of this.proyectosServidor[materias]) {
          if (!materiasCliente.has(materia)) {
            materiasCliente.add(materia);
            this.materiasCliente.push(materia);
          }
        }
      }
    } else {
      this.materiasCliente = this.proyectosServidor[this.proyectoSelecto];
    }
  }

  ngOnInit ( ) {
    this.facultadesFiltradas = this.facultadesControl.valueChanges.pipe(
      startWith(''),
      map(valor =>
        this.filtrarFacultades(valor || '')
      ),
    );
    this.proyectosFiltrados = this.proyectosControl.valueChanges.pipe(
      startWith(''),
      map(valor =>
        this.filtrarProyectos(valor || '')
      ),
    );
    this.materiasFiltradas = this.materiasControl.valueChanges.pipe(
      startWith(''),
      map(valor =>
        this.filtrarMaterias(valor || '')
      ),
    );
  }

  private filtrarFacultades (valor: string): string[] {
    const valorNormalizado = valor.toLowerCase();

    return this.facultadesCliente
      .filter(facultad => facultad.toLowerCase().includes(valorNormalizado));
  }

  private filtrarProyectos (valor: string): string[] {
    const valorNormalizado = valor.toLowerCase();

    return this.proyectosCliente
      .filter(proyecto => proyecto.toLowerCase().includes(valorNormalizado));
  }

  private filtrarMaterias (valor: string): string[] {
    const valorNormalizado = valor.toLowerCase();

    return this.materiasCliente
      .filter(materia => materia.toLowerCase().includes(valorNormalizado));
  }

  selectFacultad ( ) {
    this.facultadSelecta = this.facultadesControl.value!;
    if (!this.facultadSelecta) {
      this.proyectosCliente = Object.keys(this.proyectosServidor);
      this.facultadesControl.enable();
    } else {
      this.proyectosCliente = this.facultadesServidor[this.facultadSelecta];
      this.facultadesControl.disable();
    }
  }

  selectProyecto ( ) {
    this.proyectoSelecto = this.proyectosControl.value!;
    this.setMaterias();
    if (!this.proyectoSelecto) {
      this.proyectosControl.enable();
    } else {
      this.proyectosControl.disable();
    }
  }

  selectMateria ( ) {
    this.materiaSelecta = this.materiasControl.value!;
    if (!this.materiaSelecta) {
      this.materiasControl.enable();
    } else {
      this.materiasControl.disable();
    }
  }

  filtrar ( ) {
    if (this.facultadSelecta) {
      if (this.proyectoSelecto) {
        if (this.materiaSelecta) {

          const materia =
              this.materiaSelecta
                .substring(0,this.materiaSelecta.indexOf('::'));
          const grupo = {
              'facultad': this.facultadSelecta,
              'proyecto': this.proyectoSelecto,
              'materia': materia}
          this.emitirFiltroMateriaProyecto.emit(grupo);
          this.materiasControl.reset();
          this.selectMateria();
          this.selectProyecto();
          this.selectFacultad();

        } else {

          this.emitirFiltroProyecto.emit(this.proyectoSelecto);
          this.materiasControl.reset();
          this.proyectosControl.reset();
          this.selectMateria();
          this.selectProyecto();
          this.selectFacultad();

        }
      } else {
        if (this.materiaSelecta) {

          const materia =
              this.materiaSelecta
                .substring(0,this.materiaSelecta.indexOf('::'));
          const grupo = {
              'facultad': this.facultadSelecta,
              'materia': materia}
          this.emitirFiltroMateriaFacultad.emit(grupo);
          this.materiasControl.reset();
          this.proyectosControl.reset();
          this.selectMateria();
          this.selectProyecto();
          this.selectFacultad();

        } else {

          this.emitirFiltroFacultad.emit(this.facultadSelecta);
          this.materiasControl.reset();
          this.proyectosControl.reset();
          this.facultadesControl.reset();
          this.selectMateria();
          this.selectProyecto();
          this.selectFacultad();

        }
      }
    } else {
      if (this.proyectoSelecto) {
        if (this.materiaSelecta) {

          const materia =
              this.materiaSelecta
                .substring(0,this.materiaSelecta.indexOf('::'));
          const grupo = {
              'proyecto': this.proyectoSelecto,
              'materia': materia}
          this.emitirFiltroMateriaProyecto.emit(grupo);
          this.materiasControl.reset();
          this.selectMateria();
          this.selectProyecto();
          this.selectFacultad();

        } else {
          this.emitirFiltroProyecto.emit(this.proyectoSelecto);
          this.materiasControl.reset();
          this.proyectosControl.reset();
          this.selectMateria();
          this.selectProyecto();
          this.selectFacultad();
        }
      } else {
        if (this.materiaSelecta) {

          const materia =
              this.materiaSelecta
                .substring(0,this.materiaSelecta.indexOf('::'));
          const grupo = {
              'materia': materia,
              'grupo': ''}
          this.emitirFiltroMateria.emit(grupo);
          this.materiasControl.reset();
          this.selectMateria();
          this.selectProyecto();
          this.selectFacultad();

        }
      }
    }
  }

}