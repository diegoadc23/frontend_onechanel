import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerguntasRoutingModule } from './perguntas-routing.module';
import { PerguntasComponent } from './perguntas.component';


@NgModule({
  declarations: [PerguntasComponent],
  imports: [
    CommonModule,
    PerguntasRoutingModule
  ]
})
export class PerguntasModule { }
