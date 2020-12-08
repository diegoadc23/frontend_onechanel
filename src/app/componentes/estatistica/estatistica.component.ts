import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DadoVendaMarketplace } from 'src/app/modelos/dado-venda-marketplace.model';
import { DadoVendaPeriodo } from 'src/app/modelos/dado-venda-periodo.model';
import { EstatisticaService } from 'src/app/servicos/estatistica.service';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.scss']
})
export class EstatisticaComponent implements OnInit {

  dados: Array<DadoVendaMarketplace>
  dados2: Array<DadoVendaPeriodo>
  totalVendas: number = 0;
  tipoEstatistica: string;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private estatisticaService: EstatisticaService) { }

  ngOnInit() {


   
  this.recuperar();
     

  }


  recuperar():void {

   this.exibirEstatisticaMarketplaces();


  }


   mudarVariavel(tipo: string):void{


      if(tipo == "marketplaces"){
        this.exibirEstatisticaMarketplaces();
      }else{
        this.exibirEstatisticaPeriodo();
      }
   

 }


 exibirEstatisticaMarketplaces():void {

  this.estatisticaService.getEstatistica().subscribe( res => {

    this.totalVendas = 0;


    this.dados = res;
    let dadosChart = [];

    let labels: Array<Label> = new Array<Label>();

    this.barChartLabels = new Array<Label>();
    this.barChartData = [];

   for(var i = 0; i < this.dados.length; i++){

    
  
     let label:Label = this.dados[i].nomeMarketplace.toString();
     this.barChartLabels.push(label);
     this.totalVendas += this.dados[i].numeroVendas;
     dadosChart.push(this.dados[i].numeroVendas);

     
      
   }

   this.tipoEstatistica = "marketplace";

   this.barChartData = [
     { data: dadosChart, label: 'Marketplaces' }
   ];


 });

 }

   exibirEstatisticaPeriodo():void {

    this.estatisticaService.getEstatisticaPeriodo().subscribe( res => {

      this.totalVendas = 0;
      this.dados2 = res;
      let dadosChart = [];

      let labels: Array<Label> = new Array<Label>();
  
      this.barChartLabels = new Array<Label>();
      this.barChartData = [];

     for(var i = 0; i < this.dados2.length; i++){

      
    
       let label:Label = this.dados2[i].nomePeriodo.toString();
       this.barChartLabels.push(label);
       this.totalVendas += this.dados2[i].numeroVendas;
       dadosChart.push(this.dados2[i].numeroVendas);

       
        
     }

     this.tipoEstatistica = "periodo";

     

     this.barChartData = [
       { data: dadosChart, label: 'mês' }
     ];


   });


   }


}
