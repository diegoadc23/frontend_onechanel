import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnunciosComponent} from "./anuncios.component";
import {AnunciarComponent} from './anunciar/anunciar.component';
import {Anunciar2Component} from './anunciar2/anunciar2.component';


const routes: Routes = [
  {path: '', component: AnunciosComponent},
  { path: 'anunciar', component: AnunciarComponent  },
  { path: 'anunciar/:idProduto', component: Anunciar2Component  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnunciosRoutingModule { }
