import { Component, OnInit, Input } from '@angular/core';

import { PainelVendasService } from './../painel-vendas/painel-vendas.service';
import { Observable } from 'rxjs';
import { ProdutoDataService } from './../shared/produtos-data.service';
import { ProdutosService } from './../shared/produtos.service';
import { Produtos } from './../shared/produtos';

@Component({
  selector: 'app-vendas-realizadas',
  templateUrl: './vendas-realizadas.component.html',
  styleUrls: ['./vendas-realizadas.component.css']
})
export class VendasRealizadasComponent implements OnInit {

  // vendas= [];
  // @Input() recebeVendas;

  // constructor(private painelVendasSrv: PainelVendasService) {

  // }

  // ngOnInit() {
  //   this.vendas = this.recebeVendas;
  //   console.log(this.recebeVendas);
  // }

  produtos: Observable<any>;

  constructor(
    private produtoSrv: ProdutosService,
    private produtoDataSrv: ProdutoDataService
  ) {}

  ngOnInit() {
    this.produtos = this.produtoSrv.getAll();
  }

  delete(key: string) {

  }

  edit(produto: Produtos, key: string) {

  }
}
