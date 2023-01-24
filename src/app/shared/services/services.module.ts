import { NgModule } from '@angular/core';

import { AppHandlerService } from './app-handler.service';

@NgModule({
  providers: [
    AppHandlerService,
  ],
  imports: [],
  exports: []
})
export class ServicesSharedModule { }