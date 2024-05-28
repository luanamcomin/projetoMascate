import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderCatalogComponent } from './catalogo/order-catalog/order-catalog.component';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'catalogo', component: OrderCatalogComponent },
  { path: 'home', component: HomeComponent },
  {path: '', component: AppComponent},
];

const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

export { routing };
