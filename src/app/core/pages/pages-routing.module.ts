import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageChooseUComponent } from './page-choose-u/page-choose-u.component';
import { PageUniversityPanelComponent } from './page-university-panel/page-university-panel.component';
import { PageAboutComponent } from './page-about/page-about.component'

const routes: Routes = [
  { path: 'chooseU', component: PageChooseUComponent },
  { path: 'previU/:id', component: PageUniversityPanelComponent },
  { path: 'About', component: PageAboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }