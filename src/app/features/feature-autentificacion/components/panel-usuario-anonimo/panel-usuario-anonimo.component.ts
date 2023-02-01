import { Component } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {
  AutentificacionService
} from '../../services/autentificacion.service';

@Component({
  selector: 'aion-panel-usuario-anonimo',
  templateUrl: './panel-usuario-anonimo.component.html',
  styleUrls: ['./panel-usuario-anonimo.component.scss'],
})

export class PanelUsuarioAnonimoComponent {

  mensaje: string = '';

  constructor (
    private panelOrigen:
      MatBottomSheetRef<PanelUsuarioAnonimoComponent>,
    private autentificacionService: AutentificacionService,
  ) { }

  iniciarSesion(dict: any) {
    this.autentificacionService.getValidacionAutentificacion(dict)
      .subscribe(
        data => {
          this.autentificacionService.setToken(data['Simbolismo']);
          this.panelOrigen.dismiss();
        }, error => {
          this.mensaje = 'El inicio de sesion no se completo, revise los datos';
        }
      );
  }

  registroUsuario(dict: any) {
    this.autentificacionService.getAgregarAutentificacion(dict)
      .subscribe(
        data => {
          console.log(data);
          alert('Usuario registrado e iniciado en sesion');
          this.iniciarSesion(dict);
        }, error => {
          this.mensaje = 'El registro no se completo, revise los datos';
          if (error.includes('412')) {
            this.mensaje = 'Ya existe un usuario con ese correo o ese nombre de usuario';
          }
        }
      );
  }

}