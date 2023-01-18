import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageKairosDistritalComponent } from './page-kairos-distrital/page-kairos-distrital.component';
import { PageViewAIONComponent } from './page-view-aion/page-view-aion.component';

const routes: Routes = [
  { path: 'clasSetIn/ud', component: PageKairosDistritalComponent },
  { path: 'viU/AION', component: PageViewAIONComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }