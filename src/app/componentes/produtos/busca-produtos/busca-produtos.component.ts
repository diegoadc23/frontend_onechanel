import { Component, OnInit } from '@angular/core';
import {Produto} from '../../../modelos/produto.model';
import {ProdutosService} from '../../../servicos/produtos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParametrosPesquisaProduto } from 'src/app/modelos/parametros-pesquisa-produto.model';

@Component({
  selector: 'app-busca-produtos',
  templateUrl: './busca-produtos.component.html',
  styleUrls: ['./busca-produtos.component.scss']
})
export class BuscaProdutosComponent implements OnInit {

  produtos: Array<Produto>;
  frmPesquisaProduto: FormGroup;

  constructor(private produtosService: ProdutosService, private fb: FormBuilder) {

    this.produtos = new Array<Produto>();
    this.frmPesquisaProduto = this.fb.group({ nome: [''], precoLimiteInferior: [''], precoLimiteSuperior: [''], sku: [''] });

  }

  ngOnInit() {

      this.recuperarProdutos();
  }


  recuperarProdutos():void {

      this.produtosService.getProdutos(new ParametrosPesquisaProduto()).subscribe((res) => {

        this.produtos = res;

      });

  }

  pesquisar():void {

    let nome: String = this.frmPesquisaProduto.get('nome').value;
    let parametrosPesquisaProduto: ParametrosPesquisaProduto = new ParametrosPesquisaProduto();

    parametrosPesquisaProduto.nome = this.frmPesquisaProduto.get('nome').value;
    parametrosPesquisaProduto.precoLimiteInferior  = this.frmPesquisaProduto.get('precoLimiteInferior').value
    parametrosPesquisaProduto.precoLimiteSuperior  = this.frmPesquisaProduto.get('precoLimiteSuperior').value
    parametrosPesquisaProduto.sku  = this.frmPesquisaProduto.get('sku').value

    alert(parametrosPesquisaProduto.precoLimiteInferior);

    this.produtosService.getProdutos(parametrosPesquisaProduto).subscribe((res) => {

          this.produtos = res;

    });

  }

}
