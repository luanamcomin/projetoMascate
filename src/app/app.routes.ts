import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderCatalogComponent } from './catalogo/order-catalog/order-catalog.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'catalogo', component: OrderCatalogComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }
];

const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

export { routing };
