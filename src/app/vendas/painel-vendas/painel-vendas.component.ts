import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-vendas',
  templateUrl: './painel-vendas.component.html',
  styleUrls: ['./painel-vendas.component.css']
})
export class PainelVendasComponent implements OnInit {

  // infoProduto: any = {
  //   nome: '',
  //   data: ''
  // };

  produto: string[] = [];
  data: string[] = [];

  onSubmit(form) {
    console.log(form);
    console.log(this.produto);
    console.log(this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
