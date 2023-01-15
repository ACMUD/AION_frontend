import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavBarComponent } from './navbar/navbar.component';
import { BottomComponent } from './bottom/bottom.component';
import { UniversitySelectorComponent } from './university-selector/university-selector.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { AboutPartnerComponent } from './about-partner/about-partner.component';

@NgModule({
  declarations: [
    NavBarComponent,
    BottomComponent,
    UniversitySelectorComponent,
    UniversityDetailsComponent,
    AboutPartnerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    BottomComponent,
    UniversitySelectorComponent,
    UniversityDetailsComponent,
    AboutPartnerComponent
  ]
})
export class ComponentsModule { }