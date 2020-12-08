import { Component, OnInit } from '@angular/core';
import { ParametrosPesquisaProduto } from 'src/app/modelos/parametros-pesquisa-produto.model';
import {Produto} from '../../../modelos/produto.model';
import {ProdutosService} from '../../../servicos/produtos.service';

@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.scss']
})
export class AnunciarComponent implements OnInit {

  produtos: Array<Produto>;

  constructor(private produtosService: ProdutosService) {

    this.produtos = new Array<Produto>();

  }

  ngOnInit() {

    this.recuperarProdutos();
  }


  recuperarProdutos():void {

    this.produtosService.getProdutos(new ParametrosPesquisaProduto()).subscribe((res) => {

      this.produtos = res;

    });

  }

}
