import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasRoutingModule } from './contas-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContasComponent} from "./contas.component";
import {HttpClientModule} from "@angular/common/http";
import { ListaComponent } from './lista/lista.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { GerenciaContasComponent } from './gerencia-contas/gerencia-contas.component';


@NgModule({
  declarations: [

    ContasComponent,

    ListaComponent,

    GerenciaContasComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    ContasRoutingModule,
    FormsModule,
    DashboardModule,
    ReactiveFormsModule,

  ]
})
export class ContasModule { }
