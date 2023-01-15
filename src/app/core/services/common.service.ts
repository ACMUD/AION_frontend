import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Universidad } from '../models/universidad.model';

@Injectable()
export class SelectorService {

  constructor(private http: HttpClient){ }

  errorHandler(err: HttpErrorResponse){
    return throwError(
        err.message ||
        'Error [Selector]: ' + 'Inhabilitado para completar la peticion.'
    );
  }

  getUniversidades(): Observable<Universidad[]>{
    return this.http
      .get<Universidad[]>(`${ environment.baseUrl }/universidades`)
      .pipe(catchError(this.errorHandler));
  }

  getDiminutivo(uId: string | null): Observable<String>{
    return this.http
      .get<String>(`${ environment.baseUrl }/universidad/${ uId }/diminutivo`)
      .pipe(catchError(this.errorHandler));
  }

  getUniversidad( uId: string ): Observable<Universidad>{
    return this.http
      .get<Universidad>(`${ environment.baseUrl }/universidad/${ uId }/preview`)
      .pipe(catchError(this.errorHandler));
    }

}