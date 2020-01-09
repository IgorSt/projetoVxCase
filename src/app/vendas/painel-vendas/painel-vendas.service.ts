import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PainelVendasService {
  venda :Object[];
  constructor() { }

  saveItens(valor){
    this.venda = [{
      item: valor.item,
      data: valor.data
    }]
    console.log(this.venda);
  }

  getItens(){
    return this.venda;
    console.log(this.venda);
  }
}
