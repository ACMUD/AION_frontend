import { Component, Input } from '@angular/core';

import {
  EspacioHorarioGraficable
} from '../../models/espacio-horario-graficable.model';

@Component({
  selector: 'aion-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})

export class ScheduleComponent {

  diasSemana: string[] =
  [
    'LUNES',
    'MARTES',
    'MIERCOLES',
    'JUEVES',
    'VIERNES',
    'SABADO',
    'DOMINGO'
  ]

  horasDia: string[] =
  [
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
  ];

  altura: number = 150;

  @Input() eventosDia: {[dia: string]: EspacioHorarioGraficable[]} = {};
  constructor() {
  }
}