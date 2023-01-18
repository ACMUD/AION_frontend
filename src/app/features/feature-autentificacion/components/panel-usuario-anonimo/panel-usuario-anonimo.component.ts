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

}