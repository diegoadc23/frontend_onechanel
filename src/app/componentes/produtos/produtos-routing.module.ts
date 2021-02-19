import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutosComponent} from './produtos.component';
import {BuscaProdutosComponent} from './busca-produtos/busca-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhesDeletarComponent } from './detalhes-deletar/detalhes-deletar.component';


const routes: Routes = [
  {path: '', component: BuscaProdutosComponent},
  {path: 'adicionar', component: ProdutosComponent},
  {path: 'detalhes/:id', component: DetalhesProdutoComponent },
  {path: 'editar/:id', component: EditarComponent },
  {path: 'deletar/:id', component: DetalhesDeletarComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
