import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'contas', loadChildren: () => import('./componentes/contas/contas.module').then(m => m.ContasModule)},
  {path: 'marcas', loadChildren: () => import('./componentes/produtos/marcas/marcas.module').then(m => m.MarcasModule)},

  {path: 'anuncios', loadChildren: () => import('./componentes/anuncios/anuncios.module').then(m => m.AnunciosModule)},
  {path: 'marketplaces', loadChildren: () => import('./componentes/contas/contas.module').then(m => m.ContasModule)},
  {path: 'produtos', loadChildren: () => import('./componentes/produtos/produtos.module').then(m => m.ProdutosModule) },
  {path: 'perguntas', loadChildren: () => import('./componentes/perguntas/perguntas.module').then(m => m.PerguntasModule) },
  {path: 'usuarios', loadChildren: () => import('./componentes/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  {path: 'pedidos', loadChildren: () => import('./componentes/pedidos/pedidos.module').then(m => m.PedidosModule) },
  {path: 'login', loadChildren: () => import('./componentes/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./componentes/dashboard/home/home.module').then(m => m.HomeModule) },
  { path: 'estatistica', loadChildren: () => import('./componentes/estatistica/estatistica.module').then(m => m.EstatisticaModule) },
  { path: 'planos', loadChildren: () => import('./componentes/planos/planos.module').then(m => m.PlanosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
