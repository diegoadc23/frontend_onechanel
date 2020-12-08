import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutosComponent} from './produtos.component';
import {BuscaProdutosComponent} from './busca-produtos/busca-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { EditarComponent } from './editar/editar.component';


const routes: Routes = [
  {path: '', component: BuscaProdutosComponent},
  {path: 'adicionar', component: ProdutosComponent},
  {path: 'detalhes/:id', component: DetalhesProdutoComponent },
  {path: 'editar/:id', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
