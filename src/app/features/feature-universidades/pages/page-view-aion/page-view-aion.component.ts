import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import {
  EspacioHorarioGraficable
} from '../../models/espacio-horario-graficable.model';

@Component({
  selector: 'aion-view-schedule',
  templateUrl: './page-view-aion.component.html',
  styleUrls: ['./page-view-aion.component.scss'],
})

export class PageViewAIONComponent {

  indice: number = 0;
  horarios: {[dia: string]: EspacioHorarioGraficable[]}[] = [];
  cantMaterias: number = 0;
  cantHorarios: number = 0;

  constructor (private router: Router, private route: ActivatedRoute) {
    try{
      this.horarios = window.history.state.horarios;
      this.cantMaterias = window.history.state.cantMaterias;
      this.cantHorarios = this.horarios.length;
    } catch ( error ) {
      this.router.navigate(['lost']);
    }
  }

  horarioSelecto ( ) {
    return this.horarios[this.indice];
  }

  exportarPDF(divId: string){
    let div: any = document.getElementById(divId);

    for (let span of div.getElementsByClassName('cal-event-description')){
        span.style.webkitWritingMode = 'inherit';
    }

    html2canvas(div).then(lienzo => {
        let alto = 630;
        let anch = (lienzo.width * alto) / lienzo.height;
        let esquina = 4 * anch / 9;

        const contenido = lienzo.toDataURL('image/png',1.0);
        let pdf = new jsPDF('p', 'px', 'a4');
        pdf.addImage(contenido, 'PNG', esquina, 0, anch, alto);

        let nombre = divId + '_' + this.indice;
        //pdf.save(nombre + '.pdf');

        pdf.setProperties({
                title: nombre
            });
        window.open(pdf.output('bloburl'), '_blank');
    });


    for (let span of div.getElementsByClassName('cal-event-description')){
        span.style.webkitWritingMode = 'vertical-rl';
    }
  }

}