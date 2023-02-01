import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aion-panel-registro-usuario',
  templateUrl: './panel-registro-usuario.component.html',
  styleUrls: ['./panel-registro-usuario.component.scss'],
})

export class PanelRegistroUsuarioComponent {

  nombres: string = '';
  apellidos: string = '';
  correo: string= '';
  usuario: string = '';
  clave: string= '';
  confirmacion: string= '';
  claveVisible: boolean = false;
  confirmacionVisible: boolean = false;

  @Output() datosValidados = new EventEmitter<any>();
  constructor ( ) { }

  private esCorreo (exp: string): boolean {
    let expCorreo = new RegExp('^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');
    return expCorreo.test(exp);
  }

  private coinciden ( ) {
    return (this.clave == this.confirmacion);
  }

  verificar ( ) {
    if (
        this.nombres &&
        this.correo &&
        this.usuario &&
        this.clave &&
        this.confirmacion &&
        this.esCorreo(this.correo) &&
        this.coinciden()
    ) {
      let dict = {
          'nombres': this.nombres,
          'apellidos': this.apellidos,
          'correo': this.correo,
          'apodo': this.usuario,
          'clave': this.clave
      };
      this.datosValidados.emit(dict);
    }
  }

}