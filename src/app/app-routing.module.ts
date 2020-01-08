import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendasRealizadasComponent } from './vendas/vendas-realizadas/vendas-realizadas.component';
import { PainelVendasComponent } from './vendas/painel-vendas/painel-vendas.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  { path: '', component: PainelVendasComponent },
  { path: 'painel-vendas', component: PainelVendasComponent },
  { path: 'vendas-realizadas', component: VendasRealizadasComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
