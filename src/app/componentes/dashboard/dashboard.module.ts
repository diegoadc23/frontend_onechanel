import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {MenuLateralComponent} from '../menu-lateral/menu-lateral.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    MenuLateralComponent,
    RodapeComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    MenuLateralComponent,
    RodapeComponent
  ]
})
export class DashboardModule { }
