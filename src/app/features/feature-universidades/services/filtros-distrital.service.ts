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

}