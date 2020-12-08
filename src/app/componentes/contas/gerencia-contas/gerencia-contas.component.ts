import { Component, OnInit } from '@angular/core';
import { ContaMercadoLivre } from 'src/app/modelos/conta-mercado-livre';
import { ContasService } from 'src/app/servicos/contas.service';
import { CredencialMarketplace } from 'src/app/modelos/credencial-marketplace.model';

@Component({
  selector: 'app-gerencia-contas',
  templateUrl: './gerencia-contas.component.html',
  styleUrls: ['./gerencia-contas.component.scss']
})
export class GerenciaContasComponent implements OnInit {

  contas:Array<CredencialMarketplace>

  constructor(private contasService: ContasService) { }

  ngOnInit() {

    this.recuperarContas();

  }


  recuperarContas():void {

     this.contasService.getContas().subscribe( res => {

      this.contas = res;


     });

  }


}
