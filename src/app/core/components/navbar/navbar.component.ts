import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { AppHandlerService } from '../../../shared/services/app-handler.service';
import {
  AutentificacionService
} from '../../../features/feature-autentificacion/services/autentificacion.service';

@Component({
  selector: 'aion-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavBarComponent {

  constructor (
    public appHandlerService: AppHandlerService,
    private autentificacionService: AutentificacionService,
    private panelUsuario: MatBottomSheet
  ) { }

  abrirPanelAutentificacion ( ) {
    this.autentificacionService.abrirPanelAutentificacion(this.panelUsuario);
  }

  estaEnSesion ( ): boolean {
    return this.autentificacionService.estaEnSesion();
  }

}