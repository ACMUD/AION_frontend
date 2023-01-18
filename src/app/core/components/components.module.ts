import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NavBarComponent } from './navbar/navbar.component';
import { BottomComponent } from './bottom/bottom.component';
import { UniversitySelectorComponent } from './university-selector/university-selector.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { AboutPartnerComponent } from './about-partner/about-partner.component';
import { AboutProjectsComponent } from './about-projects/about-projects.component';
import { AboutHeaderComponent } from './about-header/about-header.component';

@NgModule({
  declarations: [
    NavBarComponent,
    BottomComponent,
    UniversitySelectorComponent,
    UniversityDetailsComponent,
    AboutPartnerComponent,
    AboutProjectsComponent,
    AboutHeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTooltipModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    BottomComponent,
    UniversitySelectorComponent,
    UniversityDetailsComponent,
    AboutPartnerComponent,
    AboutProjectsComponent,
    AboutHeaderComponent
  ]
})
export class ComponentsModule { }