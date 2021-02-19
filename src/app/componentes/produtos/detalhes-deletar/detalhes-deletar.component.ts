import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/modelos/produto.model';
import { AnunciosService } from 'src/app/servicos/anuncios.service';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-detalhes-deletar',
  templateUrl: './detalhes-deletar.component.html',
  styleUrls: ['./detalhes-deletar.component.scss']
})
export class DetalhesDeletarComponent implements OnInit {

  produto:Produto;
  id:string;

  constructor(private produtosService:ProdutosService, private route:ActivatedRoute) { 

    this.produto = new Produto();
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
  })

  }

  ngOnInit() {

    this.produtosService.getProdutoAnuncios(this.id).subscribe((res) => {

       this.produto = res;

    });

  }

  deletarProduto(){

    this.produtosService.deleteProduto(this.id).subscribe((res) => {

      this.produto = res;

   });

  }

}
