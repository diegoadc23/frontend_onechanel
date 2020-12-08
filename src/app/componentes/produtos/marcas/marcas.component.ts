import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MarcasService } from 'src/app/servicos/marcas.service';
import { Marca } from 'src/app/modelos/marca.model';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  frmMarcas: FormGroup;

  constructor(private fb: FormBuilder, private marcasService: MarcasService) { 

    this.frmMarcas = this.fb.group({ nome: [''] });


  }

  ngOnInit() {


  }

  cadastrar(): void {

    let marca: Marca = new Marca();

    marca.nome = this.frmMarcas.get('nome').value;

    this.marcasService.addMarca(marca).subscribe( (res) => {



    });

  }

}
