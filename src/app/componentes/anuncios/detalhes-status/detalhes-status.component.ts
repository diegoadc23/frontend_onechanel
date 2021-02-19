import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/modelos/produto.model';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-detalhes-status',
  templateUrl: './detalhes-status.component.html',
  styleUrls: ['./detalhes-status.component.scss']
})
export class DetalhesStatusComponent implements OnInit {

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

 
  alterarStatus(){
    this.produtosService.alterarStatusProduto(this.id).subscribe((res) => {

      this.produto = res;

   });
  }
}
