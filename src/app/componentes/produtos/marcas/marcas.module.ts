import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MarcasComponent],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MarcasModule { }
