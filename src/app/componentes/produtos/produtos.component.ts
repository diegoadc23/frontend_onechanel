import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProdutosService} from '../../servicos/produtos.service';
import {Produto} from '../../modelos/produto.model';
import { MarcasService } from 'src/app/servicos/marcas.service';
import { Marca } from 'src/app/modelos/marca.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  frmDados: FormGroup;
  frmFrete: FormGroup;
  frmDescricao: FormGroup;
  frmFotos: FormGroup;
  fileToUpload: File = null;
  marcas: Array<Marca>;
  abaAtual: string;

  constructor(private fb: FormBuilder, private produtosService: ProdutosService, private marcasService: MarcasService) {

    this.abaAtual = "dados"

    this.frmDados = fb.group({
         nome: [''], estado:[''], gtin:[''],  sku: [''], mpn: [''], ncm: [''],
         video: [''], marca: [''], categoria: [''],
         preco: [''],  tempoGarantia: [''], estoque: ['']
    });

    
    this.frmFrete = fb.group({
      altura: [''], comprimento: [''], largura: [''], peso: ['']
 
 });

 
 this.frmDescricao = fb.group({
  descricao: [''],
});

this.frmFotos = fb.group({
  foto1: [''],
});

  

  }

  ngOnInit() {

    this.recuperarMarcas();
  }

  criarProduto():void {

    let produto = new Produto();

    produto.nome = this.frmDados.get('nome').value;
    produto.estoque = this.frmDados.get('estoque').value;
    produto.preco = this.frmDados.get('preco').value;
    produto.descricao = this.frmDados.get('descricao').value;

    let formData = new FormData();

    formData.set("nome", this.frmDados.get('nome').value);
    formData.set("estoque", this.frmDados.get('estoque').value);
    formData.set("preco", this.frmDados.get('preco').value);
    formData.set("estado", this.frmDados.get('estado').value);
    formData.set("sku", this.frmDados.get('sku').value);
    formData.set("gtin", this.frmDados.get('gtin').value);
    formData.set("mpn", this.frmDados.get('mpn').value);
    formData.set("ncm", this.frmDados.get('ncm').value);

    formData.set("altura", this.frmFrete.get('altura').value);
    formData.set("comprimento", this.frmFrete.get('comprimento').value);
    formData.set("largura", this.frmFrete.get('largura').value);
    formData.set("peso", this.frmFrete.get('peso').value);


    formData.set("descricao", this.frmDescricao.get('descricao').value);



    formData.set("imagem1", this.fileToUpload);


    this.produtosService.addProduto(formData).subscribe((res) => {



    });

  }

  recuperarMarcas():void {

    this.marcasService.getMarcas().subscribe( (res) => {

      this.marcas  = res;

    });

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    alert(this.fileToUpload);
  }

  mudarAba(aba:string){

    this.abaAtual = aba;


  }

  openFile():void{
    document.getElementById('file').click()
  }

}
