import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import { Colaborador } from '../../models/colaborador.model';

@Component({
  selector: 'aion-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
})

export class PageAboutComponent implements OnInit {
  colaboradores: Colaborador[] = [];

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
            }
          }
        }
      }
    );
  }

}