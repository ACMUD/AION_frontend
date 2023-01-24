import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageUpdateUComponent } from './page-update-u/page-update-u.component';

const routes: Routes = [
  { path: 'Update/:id', component: PageUpdateUComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }