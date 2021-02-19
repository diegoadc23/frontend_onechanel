import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnunciosRoutingModule } from './anuncios-routing.module';
import { AnunciosComponent } from './anuncios.component';
import { AnunciarComponent } from './anunciar/anunciar.component';
import { Anunciar2Component } from './anunciar2/anunciar2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DetalhesStatusComponent } from './detalhes-status/detalhes-status.component';


@NgModule({
  declarations: [AnunciosComponent, AnunciarComponent, Anunciar2Component, DetalhesStatusComponent],
  imports: [
    CommonModule,
    AnunciosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule
  ]
})
export class AnunciosModule { }
