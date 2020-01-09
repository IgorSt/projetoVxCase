import { PainelVendasService } from './painel-vendas.service';
import { Component, OnInit } from '@angular/core';

import { ProdutoDataService } from './../shared/produtos-data.service';
import { ProdutosService } from './../shared/produtos.service';
import { Produtos } from './../shared/produtos';

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

  // produto: string[] = [];
  // data: string[] = [];
  // venda :Object[];
  // enviado: boolean = false;
  // constructor(public vendasService:PainelVendasService){

  // }


  // ngOnInit() {
  //   this.venda = [{
  //     item: 'aaa',
  //     data: 'bbb'
  //   }]
  // }

  // onSubmit() {
  //   this.venda = [{
  //     item: this.produto,
  //     data: this.data
  //   }]
  //   this.enviado = true;
  // }

  produto: Produtos;
  key: string = '';

  constructor(
    private produtoSrv: ProdutosService,
    private produtoDataSrv: ProdutoDataService
    ) {}

  ngOnInit() {
    this.produto = new Produtos();
  }

  onSubmit() {
    if (this.key) {

    } else {
      this.produtoSrv.insert(this.produto);
    }

    this.produto = new Produtos();
  }

}
