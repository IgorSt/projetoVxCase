import { Component, OnInit } from '@angular/core';

import { PainelVendasService } from './../painel-vendas/painel-vendas.service';

@Component({
  selector: 'app-vendas-realizadas',
  templateUrl: './vendas-realizadas.component.html',
  styleUrls: ['./vendas-realizadas.component.css']
})
export class VendasRealizadasComponent implements OnInit {

  itens: string[];

  dataCompra: string[];

  constructor(private painelVendasSrv: PainelVendasService) {

    this.itens = this.painelVendasSrv.getItens();
    this.dataCompra = this.painelVendasSrv.getDataCompra();

  }

  ngOnInit() {
  }

}
