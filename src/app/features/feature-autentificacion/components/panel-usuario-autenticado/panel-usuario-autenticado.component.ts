import { Component } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {
  AutentificacionService
} from '../../services/autentificacion.service';

@Component({
  selector: 'aion-panel-usuario-autenticado',
  templateUrl: './panel-usuario-autenticado.component.html',
  styleUrls: ['./panel-usuario-autenticado.component.scss'],
})

export class PanelUsuarioAutenticadoComponent {

  constructor (
    private panelOrigen:
      MatBottomSheetRef<PanelUsuarioAutenticadoComponent>,
    private autentificacionService: AutentificacionService,
  ) { }

  cerrarSesion() {
    this.autentificacionService.delToken();
    this.panelOrigen.dismiss();
  }

}