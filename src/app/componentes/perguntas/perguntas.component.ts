import { Component, OnInit } from '@angular/core';
import {Pergunta} from '../../modelos/pergunta.model';
import {PerguntasService} from '../../servicos/perguntas.service';
import {FormArray, FormBuilder} from '@angular/forms';
import {Resposta} from '../../modelos/resposta';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.scss']
})
export class PerguntasComponent implements OnInit {

  perguntas: Array<Pergunta>
  frmPerguntas: FormArray;

  constructor(private perguntasService: PerguntasService, private fb: FormBuilder) {


    this.perguntas = new Array<Pergunta>();

  }

  ngOnInit() {
    this.recuperarPerguntas();
  }


  recuperarPerguntas(): void {

    this.perguntasService.getPerguntas().subscribe((res) => {
      this.perguntas = res;
    });

  }

  responderPergunta(id: string, texto: any): void {

    let resposta = new Resposta();

    resposta.question_id = id;
    resposta.text = texto;

    alert(id);

    this.perguntasService.responderPergunta(resposta).subscribe((res) => {

    });

  }

}
