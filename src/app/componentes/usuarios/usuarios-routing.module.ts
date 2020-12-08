import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarusuarioComponent } from './criarusuario/criarusuario.component';
import {UsuariosComponent} from './usuarios.component';


const routes: Routes = [{
  path: '', component: UsuariosComponent,
},
{path: 'criar', component: CriarusuarioComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
