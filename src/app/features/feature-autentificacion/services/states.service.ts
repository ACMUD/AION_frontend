import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()
export class StatesService {

  constructor (
    private http: HttpClient,
  ) { }

  errorHandler (err: HttpErrorResponse){
    if (err.status === 401) {
      alert('Fallo en el envio de datos, revise la sesion');
    }
    return throwError(
      err.message ||
      'Error [States]: ' + 'Inhabilitado para completar la petición.'
    );
  }

  getPreview(
      uId: string,
      headers: HttpHeaders
  ) {
    return this.http
      .get<any>(`${ environment.baseUrl }universidad/${ uId }/personal`,{'headers': headers})
      .pipe(catchError(this.errorHandler));
  }

  getState(
      uId: string,
      headers: HttpHeaders
  ) {
    return this.http
      .get<any>(`${ environment.baseUrl }universidad/${ uId }/horarios/personal`,{'headers': headers})
      .pipe(catchError(this.errorHandler));
  }

}