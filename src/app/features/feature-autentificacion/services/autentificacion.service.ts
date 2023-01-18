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

  private token: string = '';

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
    this.token = token_valido;
  }

  delToken ( ) {
    this.token = '';
  }

  estaEnSesion ( ): boolean {
    return (this.token) ? true : false;
  }

  getValidacionAutentificacion (dict: any): Observable<any> {
    return this.http
      .post<string>(`${environment.baseUrl}/signin`, dict)
      .pipe(catchError(this.errorHandler));
  }

  setInvalidarSesion ( ): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer' + this.token
    });
    return this.http
      .post<string>(`${environment.baseUrl}/signout`, {'headers': headers})
      .pipe(catchError(this.errorHandler));
  }

}