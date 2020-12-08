import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/modelos/produto.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  id: string;
  produto: Produto;
  frmProduto: FormGroup;


  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private produtosService: ProdutosService) { 

    this.produto = new Produto();
    this.frmProduto = fb.group({
      nome: [''], preco: [''], descricao: [''], sku: [''], tempoGarantia: [''], estoque: ['']
 });

  }

  ngOnInit() {

    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');


      this.recuperarProduto()
  })

  }

  recuperarProduto():void{

    this.produtosService.getProduto(this.id).subscribe(res => {

      this.produto = res;

    });

   }

   cancelar():void{

    this.router.navigateByUrl('/produtos');

   }

   salvar():void {

     let produto: Produto = new Produto();
     produto.preco = this.frmProduto.get('preco').value;
     produto.id = parseInt( this.id);

        this.produtosService
        .putProduto(produto).subscribe( res => {

        });

   }

}
