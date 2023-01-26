import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { PagesRoutingModule } from './pages-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageChooseUComponent } from './page-choose-u/page-choose-u.component';
import { PageUniversityPanelComponent } from './page-university-panel/page-university-panel.component';
import { PageAboutComponent } from './page-about/page-about.component';

import { ComponentsModule } from '../components/components.module'

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PageChooseUComponent,
    PageUniversityPanelComponent,
    PageAboutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,

    MatButtonModule,

    PagesRoutingModule,
  ],
  exports: [
    PageNotFoundComponent,
    PageChooseUComponent,
    PageUniversityPanelComponent,
    PageAboutComponent
  ]
})
export class PagesModule { }