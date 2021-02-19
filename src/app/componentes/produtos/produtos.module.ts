import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BuscaProdutosComponent } from './busca-produtos/busca-produtos.component';
import {DashboardModule} from '../dashboard/dashboard.module';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { EditarComponent } from './editar/editar.component';
import { MarcasComponent } from './marcas/marcas.component';
import { DetalhesDeletarComponent } from './detalhes-deletar/detalhes-deletar.component';


@NgModule({
  declarations: [ProdutosComponent, BuscaProdutosComponent, DetalhesProdutoComponent, EditarComponent, MarcasComponent,
    DetalhesDeletarComponent
  
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    DashboardModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
