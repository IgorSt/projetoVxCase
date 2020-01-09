import { Component, OnInit, Input } from '@angular/core';

import { PainelVendasService } from './../painel-vendas/painel-vendas.service';

@Component({
  selector: 'app-vendas-realizadas',
  templateUrl: './vendas-realizadas.component.html',
  styleUrls: ['./vendas-realizadas.component.css']
})
export class VendasRealizadasComponent implements OnInit {

  vendas= [];
  @Input() recebeVendas;

  constructor(private painelVendasSrv: PainelVendasService) {

  }

  ngOnInit() {
    this.vendas = this.recebeVendas;
    console.log(this.recebeVendas);
  }

}
