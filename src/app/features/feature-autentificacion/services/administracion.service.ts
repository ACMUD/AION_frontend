import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

import { AutentificacionService } from './autentificacion.service';

@Injectable()
export class AdministracionService {

  constructor (
    private http: HttpClient,
    private autentificacionService: AutentificacionService,
  ) { }

  errorHandler (err: HttpErrorResponse){
    if (err.status === 406) {
      alert('Una de las condiciones para la solicitud no fue cumplida');
    }
    if (err.status === 401) {
      alert('Se requieren permisos de administrador');
    }
    return throwError(
      err.message ||
      'Error [Admin]: ' + 'Inhabilitado para completar la petición.'
    );
  }

  cargarArchivoU(uId: string, archivo: File){
    let headers = this.autentificacionService.getHeader();
    const datosForm = new FormData();
    datosForm.append("file", archivo, archivo.name);
    return this.http
      .post(
        `${ environment.baseUrl }universidad/${ uId }/cargar_archivo`,
        datosForm,
        {'headers': headers}
      )
      .pipe(catchError(this.errorHandler));
  }

  actualizarHorariosU(uId: string, extension: string){
    let headers = this.autentificacionService.getHeader();
    return this.http
      .get(
        `${ environment.baseUrl }universidad/${ uId }/horarios/actualizar/${ extension }`,
        {'headers': headers}
      )
      .pipe(catchError(this.errorHandler));
  }

}