import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/modelos/pedido.model';
import { PedidosService } from 'src/app/servicos/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedidos:Array<Pedido>;

  constructor(private pedidosService: PedidosService) { 
    this.pedidos = new Array<Pedido>();
  }

  ngOnInit() {
   this.recuperarPedidos();
  }


  recuperarPedidos():void {
    this.pedidosService.getPedidos().subscribe( (res) => {

      this.pedidos = res;

    });
  }

}
