import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CredencialMarketplace} from "../../modelos/credencial-marketplace.model";
import {ContasService} from "../../servicos/contas.service";

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements OnInit {

  frmConta: FormGroup;

  constructor(private formBuilder: FormBuilder, private contasService: ContasService) {

    this.frmConta = formBuilder.group({nomeConta: [''], idAplicativo: [''], secretKey: ['']});

  }

  ngOnInit() {
  }

  criarConta():void{

   let  credencialMarketplace: CredencialMarketplace = new CredencialMarketplace();

    credencialMarketplace.nomeConta = this.frmConta.get('nomeConta').value;
    credencialMarketplace.idAplicacao = this.frmConta.get('idAplicativo').value;
    credencialMarketplace.secretKey = this.frmConta.get('secretKey').value;




   this.contasService.addConta(credencialMarketplace).subscribe((res) => {

   });


  }


}
