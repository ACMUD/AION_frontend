import { Component } from '@angular/core';

import { AppHandlerService } from '../../../shared/services/app-handler.service';

@Component({
  selector: 'aion-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavBarComponent {

  constructor ( public appHandlerService: AppHandlerService ) { }

}