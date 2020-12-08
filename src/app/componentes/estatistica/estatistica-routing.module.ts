import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstatisticaComponent } from './estatistica.component';
import { TiposEstatisticaComponent } from './tipos-estatistica/tipos-estatistica.component';


const routes: Routes = [
  { path: '', component: TiposEstatisticaComponent },

  { path: 'vendas', component: EstatisticaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstatisticaRoutingModule { }
