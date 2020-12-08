import { Component, OnInit } from '@angular/core';
import { ContaMercadoLivre } from 'src/app/modelos/conta-mercado-livre';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

   contas: Array<ContaMercadoLivre>;


  constructor() { 

    this.contas = new Array<ContaMercadoLivre>();

  }

  ngOnInit() {
  }



  


}
