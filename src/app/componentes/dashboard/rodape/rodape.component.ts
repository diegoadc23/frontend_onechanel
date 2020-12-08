import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  ano:string;
  constructor() { }

  ngOnInit() {

    var year = new Date();
    this.ano = year.getFullYear().toString();

  }

}
