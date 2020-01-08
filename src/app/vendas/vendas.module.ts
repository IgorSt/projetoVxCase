import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRealizadasComponent } from './vendas-realizadas/vendas-realizadas.component';
import { PainelVendasComponent } from './painel-vendas/painel-vendas.component';
import { VendasComponent } from './vendas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VendasComponent,
    VendasRealizadasComponent,
    PainelVendasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VendasComponent,
    PainelVendasComponent,
    VendasRealizadasComponent
  ]
})
export class VendasModule { }
