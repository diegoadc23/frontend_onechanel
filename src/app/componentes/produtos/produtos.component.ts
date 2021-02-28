import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ProdutosService} from '../../servicos/produtos.service';
import {Produto} from '../../modelos/produto.model';
import { MarcasService } from 'src/app/servicos/marcas.service';
import { Marca } from 'src/app/modelos/marca.model';
import { Variacao } from 'src/app/modelos/variacao.model';
import { AtributosService } from 'src/app/servicos/atributos.service';
import { Atributo } from 'src/app/modelos/atributo.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  frmProduto: FormGroup;
  variacoesArr:Array<Variacao>;
  fileToUpload: File = null;
  marcas: Array<Marca>;
  abaAtual: string;
  frmVariacoes: FormGroup;
  atributosSelecionadosVariacao:Array<String>;
  atributosForamDefinidos:boolean;
  atributos: Array<Array<Atributo>>;

  constructor(private fb: FormBuilder,
    private atributosService:AtributosService
    ,private produtosService: ProdutosService, private marcasService: MarcasService) {

    this.atributosForamDefinidos = false;
    this.variacoesArr = new Array<Variacao>();
    
    this.atributosSelecionadosVariacao = new Array<String>();
    this.atributos = new Array<Array<Atributo>>();

    this.frmVariacoes = this.fb.group({
  
      variacoes: this.fb.array([this.fb.group({sku:'', imagem1:[null], imagem2:[null], imagem3:[null], imagem4:[null] })])

    })


    this.abaAtual = "dados"

    this.frmProduto = fb.group({
         nome: [''], estado:[''], gtin:[''],  sku: [''], mpn: [''], ncm: [''], ean: [''],
         video: [''], marca: [''], categoria: [''],
         preco: [''],  tempoGarantia: [''], estoque: [''], foto1: [''],
         descricao: [''],  altura: [''], comprimento: [''], largura: [''], peso: ['']

    });

  }

  ngOnInit() {

    this.recuperarMarcas();
  }

  criarProduto():void {

    let produto = new Produto();

    produto.nome = this.frmProduto.get('nome').value;
    produto.estoque = this.frmProduto.get('estoque').value;
    produto.preco = this.frmProduto.get('preco').value;
    produto.descricao = this.frmProduto.get('descricao').value;

    let formData = new FormData();

    formData.set("nome", this.frmProduto.get('nome').value);
    formData.set("estoque", this.frmProduto.get('estoque').value);
    formData.set("preco", this.frmProduto.get('preco').value);
    formData.set("estado", this.frmProduto.get('estado').value);
    formData.set("sku", this.frmProduto.get('sku').value);
    formData.set("gtin", this.frmProduto.get('gtin').value);
    formData.set("mpn", this.frmProduto.get('mpn').value);
    formData.set("ncm", this.frmProduto.get('ncm').value);

    formData.set("altura", this.frmProduto.get('altura').value);
    formData.set("comprimento", this.frmProduto.get('comprimento').value);
    formData.set("largura", this.frmProduto.get('largura').value);
    formData.set("peso", this.frmProduto.get('peso').value);


    formData.set("descricao", this.frmProduto.get('descricao').value);



    formData.set("imagem1", this.fileToUpload);

    let vvv:Array<Variacao> = new Array<Variacao>();

    let v:Variacao = new Variacao();
    v.sku = "123";

    vvv.push(v);


    for(let i = 0; i < this.variacoes.length; i++){
      
      formData.set("variacoes[" + i + "].sku", "1823");
    formData.set("variacoes[" + i + "].imagem1", this.variacoes.at(i).get("imagem1").value );
    formData.set("variacoes[" + i + "].imagem2", this.variacoes.at(i).get("imagem2").value );
    formData.set("variacoes[" + i + "].imagem3", this.variacoes.at(i).get("imagem3").value );
    formData.set("variacoes[" + i + "].imagem4", this.variacoes.at(i).get("imagem4").value );

}
    

   


    this.produtosService.addProduto(formData).subscribe((res) => {



    });

  }

  recuperarMarcas():void {

    this.marcasService.getMarcas().subscribe( (res) => {

      this.marcas  = res;

    });

  }

  handleFileInput( index:number, numeroImg:number, files: FileList) {


  if(index == -1){
    this.fileToUpload = files.item(0);

  }else{

     this.variacoes.controls[index].get("imagem" + numeroImg).setValue(files.item(0));



  }




    
     

  }

  mudarAba(aba:string){

    this.abaAtual = aba;


  }

  openFile():void{
    document.getElementById('file').click()
  }


  exibirFormularioNovaVariacao(){

    alert("ok");

  }

  get variacoes() {
    
    return this.frmVariacoes.get('variacoes') as FormArray;

  }

  addSellingPoint() {
    this.variacoes.push(this.fb.group({sku:'', imagem1:[null], imagem2:[null], imagem3:[null], imagem4:[null] }));
  }

  deleteSellingPoint(index) {
    this.variacoes.removeAt(index);
  }


  selecionarAtributo(valor:string){
      this.atributosSelecionadosVariacao.push(valor);
  }

  esconderFrmEscolhaAtributoMostrarFrmVariacoes():void {


    for(let i = 0; i < this.atributosSelecionadosVariacao.length; i++){

      this.atributosService.getAtributos(parseInt(this.atributosSelecionadosVariacao[i].toString())).subscribe((res) => {

        this.atributos.push(res);

      });

    }

    this.atributosForamDefinidos = true;

    

  }

  recuperarAtributos(id:number):Array<Atributo> {

   return null;

  }

}
