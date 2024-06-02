import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderCatalogComponent } from './catalogo/order-catalog.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { GestaoComponent } from './gestao/gestao.component';
import { HistoricoComponent } from './historico/historico.component';
import { PedidoComponent } from './pedido/pedido.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

export const routes: Routes = [
  { path: 'relatorios', component: RelatoriosComponent},
  { path: 'historico', component: HistoricoComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'gestao', component: GestaoComponent},
  { path: 'catalogo', component: OrderCatalogComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }
];

const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

export { routing };
