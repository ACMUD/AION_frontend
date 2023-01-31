import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import {
  AutentificacionService
} from '../../feature-autentificacion/services/autentificacion.service';

@Injectable()
export class AIONDistritalService {

  constructor (
    private http: HttpClient,
    private autentificacionService: AutentificacionService,
  ) { }

  errorHandler (err: HttpErrorResponse){
    if (err.status === 401) {
      alert('Falló el envio de datos, revise la sesion');
    }
    return throwError(
        err.message ||
        'Error [AION]: ' + 'Inhabilitado para completar la petición.'
    );
  }

  getHorariosAION(list: {'codMat': string, 'idGrp': string}[]):Observable<any>{
    return this.http
      .post<string>(`${environment.baseUrl}/universidad/ud/AION`, list)
      .pipe(catchError(this.errorHandler));
  }

  setHorarioPersonal(dict: {'filtros': string[][], 'selectos': string[][]}):Observable<any>{
    let headers = this.autentificacionService.getHeader();
    return this.http
      .post<string>(
        `${environment.baseUrl}/universidad/ud/horarios/personal/actualizar`,
        dict,
        {'headers': headers})
      .pipe(catchError(this.errorHandler));
  }

}