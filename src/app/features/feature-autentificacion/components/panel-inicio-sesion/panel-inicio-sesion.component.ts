import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aion-panel-inicio-sesion',
  templateUrl: './panel-inicio-sesion.component.html',
  styleUrls: ['./panel-inicio-sesion.component.scss'],
})

export class PanelInicioSesionComponent {

  usuario: string = '';
  clave: string= '';
  claveVisible: boolean = false;

  @Output() datosValidados = new EventEmitter<any>();
  constructor ( ) { }

  private esCorreo (exp: string): boolean {
    let expCorreo = new RegExp('^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');
    return expCorreo.test(exp);
  }

  verificar ( ) {
    if (this.usuario && this.clave) {
      let dict = {};
      if (this.esCorreo(this.usuario)) {
        dict = {'correo': this.usuario, 'clave': this.clave};
      } else {
        dict = {'apodo': this.usuario, 'clave': this.clave};
      }
      this.datosValidados.emit(dict);
    }
  }

}