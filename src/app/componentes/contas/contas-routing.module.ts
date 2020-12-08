import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContasComponent} from "./contas.component";
import { ListaComponent } from './lista/lista.component';
import { GerenciaContasComponent } from './gerencia-contas/gerencia-contas.component';


const routes: Routes = [
  {path: '', component: ListaComponent},
  { path: 'adicionar', component: ContasComponent },
  { path: 'gerenciar', component: GerenciaContasComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }
