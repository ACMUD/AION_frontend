import { Component } from '@angular/core';

import {
  AppHandlerService
} from '../../services/app-handler.service';

@Component({
  selector: 'aion-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})

export class LoadingComponent {

  constructor (
    public appHandlerService: AppHandlerService,
  ) { }

}