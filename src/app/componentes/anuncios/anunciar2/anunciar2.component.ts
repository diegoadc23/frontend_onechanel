import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../../modelos/categoria.model';
import {CategoriasService} from '../../../servicos/categorias.service';
import {Subcategoria} from '../../../modelos/subcategoria.model';
import {ProdutosService} from '../../../servicos/produtos.service';
import {Produto} from '../../../modelos/produto.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AnunciosService} from '../../../servicos/anuncios.service';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-anunciar2',
  templateUrl: './anunciar2.component.html',
  styleUrls: ['./anunciar2.component.scss']
})
export class Anunciar2Component implements OnInit {

  categorias: Array<Categoria>;
  id: number;

  frmProduto: FormGroup;

  produto: Produto;

  subcategorias: Array<Subcategoria>;

  constructor(private route: ActivatedRoute, private categoriasService: CategoriasService,
              private anunciosService: AnunciosService,
              private fb: FormBuilder, private produtosService: ProdutosService) {

    this.produto = new Produto();
    this.frmProduto  = fb.group({nome: [''], descricao: [''], preco: ['']});
    this.categorias = new Array<Categoria>();
    this.produto = new Produto();

  }

  ngOnInit() {

    this.recuperarCategorias();

    this.route.paramMap.subscribe( paramMap => {
      this.id = parseInt( paramMap.get('idProduto'));

      alert(this.id);

      this.recuperarProduto(this.id)
  })


  }

  anunciar(): void {

      this.anunciosService.addAnuncio(this.produto).subscribe( (res) => {

        

      });

  }


  recuperarCategorias(): void {

    this.categoriasService.getCategorias().subscribe((res) => {

      this.categorias = res;

    });

  }

  recuperarSubcategorias(idCategoria: string): void {

    alert(idCategoria);
    this.categoriasService.getSubcategorias(idCategoria).subscribe((res) => {

      this.subcategorias = res;

    });

  }

  recuperarProduto(id: number): void{


    this.produtosService.getProduto( id.toString() ).subscribe((res) => {

      this.produto = res;

      this.frmProduto.setValue({nome: [this.produto.nome], descricao: [this.produto.descricao], preco: [this.produto.preco]});



    });
  }


}
