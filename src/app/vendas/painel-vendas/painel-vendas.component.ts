import { PainelVendasService } from './painel-vendas.service';
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
  venda :Object[];
  enviado: boolean = false;
  constructor(public vendasService:PainelVendasService){

  }


  ngOnInit() {
    this.venda = [{
      item: 'aaa',
      data: 'bbb'
    }]
  }

  onSubmit() {
    this.venda = [{
      item: this.produto,
      data: this.data
    }]
    this.enviado = true;
  }

}
