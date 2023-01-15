import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';






/*
import { FiltrosComponent } from './universidad/filtros.component';
import { HorarioCreadorComponent } from './universidad/schedule-build.component';
import { HorarioVisorAIONComponent } from './universidad/schedule-view-AION.component';
*/







const routes: Routes = [





/*
  { path: 'clasSetIn/universidad/:id', component: FiltrosComponent },
  { path: 'schedule/bUild', component: HorarioCreadorComponent },
  { path: 'schedule/viU/AION', component: HorarioVisorAIONComponent },

*/





  { path: '', pathMatch: 'full', redirectTo: 'chooseU' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
