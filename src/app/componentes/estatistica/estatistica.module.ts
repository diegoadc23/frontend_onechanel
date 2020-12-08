import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstatisticaRoutingModule } from './estatistica-routing.module';
import { EstatisticaComponent } from './estatistica.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ChartsModule } from 'ng2-charts';
import { TiposEstatisticaComponent } from './tipos-estatistica/tipos-estatistica.component';

@NgModule({
  declarations: [EstatisticaComponent, TiposEstatisticaComponent],
  imports: [
    CommonModule,
    EstatisticaRoutingModule,
    DashboardModule,
    ChartsModule
  ]
})
export class EstatisticaModule { }
