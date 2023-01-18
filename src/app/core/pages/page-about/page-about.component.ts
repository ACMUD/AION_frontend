import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import { Colaborador, Proyecto } from '../../models/colaborador.model';

@Component({
  selector: 'aion-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
})

export class PageAboutComponent implements OnInit {
  colaboradores: Colaborador[] = [];
  proyectos: Proyecto[] = [];
  descriptores: {'nombre': string, 'rol': string, 'descripcion': string}[] = [];
  trazabilidad = {'nombre': 'Sistema AION', 'descripcion': ''};

  constructor(private http: HttpClient){ }

  errorHandler(err: HttpErrorResponse){
    return throwError(
        err.message ||
        'Error [Selector]: ' + 'Inhabilitado para completar la peticion.'
    );
  }

  getAbout(): Observable<Object>{
    return this.http
      .get<Object>(`${ environment.baseUrl }/about`)
      .pipe(catchError(this.errorHandler));
  }

  ngOnInit() {
    this.getAbout().subscribe(
      res => {
        if(res){
          if('colaboradores' in res){
            for (let col of (res as any).colaboradores) {
              if(col.rol == 'Colaborador'){
                this.colaboradores.push(col);
              }
              if(col.rol == 'Proyecto'){
                this.proyectos.push(col);
              }
            }
          }
          if('descriptores' in res){
            for (let dsc of (res as any).descriptores) {
              this.descriptores.push(dsc);
            }
          }
          this.trazabilidad.descripcion = (res as any).descripcion;
        }
      }
    );
  }

}