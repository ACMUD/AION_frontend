import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()
export class AIONDistritalService {

  constructor (private http: HttpClient) { }

  errorHandler (err: HttpErrorResponse){
    return throwError(
        err.message ||
        'Error [AION]: ' + 'Inhabilitado para completar la petici�n.'
    );
  }

  getHorariosAION(list: {'codMat': string, 'idGrp': string}[]):Observable<any>{
    return this.http
      .post<string>(`${environment.baseUrl}/universidad/ud/AION`, list)
      .pipe(catchError(this.errorHandler));
  }

}