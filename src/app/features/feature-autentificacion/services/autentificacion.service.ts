import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { environment } from '../../../../environments/environment';

import {
  PanelUsuarioAnonimoComponent
} from '../components/panel-usuario-anonimo/panel-usuario-anonimo.component';
import {
  PanelUsuarioAutenticadoComponent
} from '../components/panel-usuario-autenticado/panel-usuario-autenticado.component';

@Injectable()
export class AutentificacionService {

  constructor (private http: HttpClient) { }

  errorHandler (err: HttpErrorResponse){
    if (err.status === 401) {
      this.delToken();
    }
    return throwError(
      err.message ||
      'Error [Auth]: ' + 'Inhabilitado para completar la petición.'
    );
  }

  abrirPanelAutentificacion (panelOrigen: MatBottomSheet) {
    if (this.estaEnSesion()) {
      panelOrigen.open(PanelUsuarioAutenticadoComponent);
    } else {
      panelOrigen.open(PanelUsuarioAnonimoComponent);
    }
  }

  setToken (token_valido: string) {
    localStorage.setItem('simbolismo', token_valido);
    window.location.reload();
  }

  getToken (): string {
    return localStorage.getItem('simbolismo') || "";
  }

  delToken ( ) {
    this.setToken('');
    localStorage.removeItem('simbolismo');
  }

  getHeader ( ): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.getToken()
    });
  }

  estaEnSesion ( ): boolean {
    return (this.getToken()) ? true : false;
  }

  getValidacionAutentificacion (dict: any): Observable<any> {
    return this.http
      .post<string>(`${environment.baseUrl}/signin`, dict)
      .pipe(catchError(this.errorHandler));
  }

  getAgregarAutentificacion (dict: any): Observable<any> {
    return this.http
      .post<string>(`${environment.baseUrl}/signup`, dict)
      .pipe(catchError(this.errorHandler));
  }

  setInvalidarSesion ( ): Observable<any> {
    let headers = this.getHeader();
    return this.http
      .post<string>(`${environment.baseUrl}/signout`, {'headers': headers})
      .pipe(catchError(this.errorHandler));
  }

}