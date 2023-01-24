import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()
export class FiltrosDistritalService {

  constructor (private http: HttpClient) { }

  errorHandler (err: HttpErrorResponse){
    return throwError(
        err.message ||
        'Error [Filtros]: ' + 'Inhabilitado para completar la petición.'
    );
  }

  getHorariosGrupo (matCod: number, grId: string): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/universidad/ud/horarios/codigo/${matCod}/${'grupo'}/${grId}`)
      .pipe(catchError(this.errorHandler));
  }

  getHorariosMateria (matCod: number): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/universidad/ud/horarios/codigo/${matCod}`)
      .pipe(catchError(this.errorHandler));
  }

  getFacultades (): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/universidad/ud/facultades`)
      .pipe(catchError(this.errorHandler));
  }

  getProyectos (): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/universidad/ud/proyectos`)
      .pipe(catchError(this.errorHandler));
  }

  getHorariosFacultades (): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/universidad/ud/facultades/horarios`)
      .pipe(catchError(this.errorHandler));
  }

  getHorariosProyectos (): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/universidad/ud/proyectos/horarios`)
      .pipe(catchError(this.errorHandler));
  }

}