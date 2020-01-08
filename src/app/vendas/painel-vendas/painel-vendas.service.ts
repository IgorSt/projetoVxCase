import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PainelVendasService {

  constructor() { }

  getItens() {
    return ['Capa Iphone / Carregador Iphone / Fone sem fio', 'Carregador Iphone', 'Carregador Motorola', 'Capa Moto G7'];
  }

  getDataCompra() {
    return ['02/01/2020', '02/01/2020', '04/01/2020', '07/01/2020'];
  }
}
