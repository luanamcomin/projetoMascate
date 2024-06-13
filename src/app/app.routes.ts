import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { GestaoComponent } from './pages/gestao/gestao.component';
import { OrderCatalogComponent } from './pages/catalogo/order-catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  { path: 'relatorios', component: RelatoriosComponent},
  { path: 'historico', component: HistoricoComponent},
  { path: 'pedido', component: PedidoComponent},
  { path: 'gestao', component: GestaoComponent},
  { path: 'catalogo', component: OrderCatalogComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: LoginComponent}
];

const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

export { routing };
