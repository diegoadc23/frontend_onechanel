import { Component, OnInit } from '@angular/core';
import { AnunciosService } from 'src/app/servicos/anuncios.service';
import { Anuncio } from 'src/app/modelos/anuncio.model';
import { Produto } from 'src/app/modelos/produto.model';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss']
})
export class AnunciosComponent implements OnInit {

  produtos: Array<Produto>

  constructor(private anunciosService: AnunciosService) {

         

   }

  ngOnInit() {

    this.recuperarAnuncios();

  }


  recuperarAnuncios():void {

       this.anunciosService.getAnuncios().subscribe(res => {

         this.produtos = res;

       });

  }

}
