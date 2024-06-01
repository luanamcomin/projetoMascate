import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { OrderCatalogComponent } from '../catalogo/order-catalog/order-catalog.component';
import { GestaoComponent } from '../gestao/gestao.component';
import { HistoricoComponent } from '../historico/historico.component';
import { PedidoComponent } from '../pedido/pedido.component';
import { RelatoriosComponent } from '../relatorios/relatorios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, OrderCatalogComponent,
            GestaoComponent, HistoricoComponent, PedidoComponent, RelatoriosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
