import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aion-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AboutHeaderComponent {

  @Input() descriptores:
    {
      'nombre': string,
      'rol': string,
      'descripcion': string
    }[] = [];
  @Input() trazabilidad = {'nombre': 'Sistema AION', 'descripcion': ''};
  constructor ( ) { }
}