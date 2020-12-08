import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasComponent } from './componentes/contas/contas.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContasModule} from "./componentes/contas/contas.module";
import {DashboardModule} from './componentes/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContasModule,
    FormsModule,
    DashboardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
