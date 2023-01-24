import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  SelectorService
} from '../../../../core/services/selector.service';

import {
  AdministracionService
} from '../../services/administracion.service';

import {
  AppHandlerService
} from '../../../../shared/services/app-handler.service';

@Component({
  selector: 'aion-update-u',
  templateUrl: './page-update-u.component.html',
  styleUrls: ['./page-update-u.component.scss'],
  providers: [
    SelectorService,
    AdministracionService
  ],
})

export class PageUpdateUComponent {
  uId: string = '';
  archivo: File = new File([""], "filename");

  constructor(
      private selectorService: SelectorService,
      private administracionService: AdministracionService,
      private appHandlerService: AppHandlerService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  redirectToNotFound () {
    this.router.navigate(['U-UnfoUnd']);
  }

  ngOnInit () {
    const uId = this.route.snapshot.paramMap.get('id');
    if ( !uId ){
      this.redirectToNotFound();
      return;
    }
    this.uId = uId;
    try{
      this.selectorService
        .getDiminutivo(this.uId)
        .subscribe(
          ( diminu: String ) => {
            if (diminu != this.uId) {
              this.redirectToNotFound();
            }
          },error => {
            this.redirectToNotFound();
          }
        );
    } catch ( error ) {
        this.redirectToNotFound();
    }
  }

  cargarArchivo (event: any) {
    this.archivo = event.target.files[0];
  }

  confirmarEnvio ( ) {
    this.appHandlerService.loading_bool = true;
    this.administracionService
      .cargarArchivoU(
        this.uId,
        this.archivo
      ).subscribe(
        data => {
          const extension = this.archivo.name.substr(this.archivo.name.indexOf(".") + 1);
          this.administracionService
            .actualizarHorariosU(
              this.uId,
              extension
            ).subscribe(
              data => {
                this.appHandlerService.loading_bool = false;
              }, error => {
                alert('Fallo de solicitud, verifique los parametros y su autorizacion');
                this.appHandlerService.loading_bool = false;
              }
            );
        }, error => {
          alert('Fallo de solicitud, verifique los parametros y su autorizacion');
          this.appHandlerService.loading_bool = false;
        }
      );
  }

}