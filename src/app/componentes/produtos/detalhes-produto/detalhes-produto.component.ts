import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { Produto } from 'src/app/modelos/produto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent implements OnInit {

  produto:Produto;
  id: string;


  constructor( private route: ActivatedRoute, private produtosService: ProdutosService) { }

  ngOnInit() {

     this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
  })

    this.recuperarProduto();


  }

   recuperarProduto():void{

    this.produtosService.getProduto(this.id).subscribe(res => {

      this.produto = res;

    });

   }

}
