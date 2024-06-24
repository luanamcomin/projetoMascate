import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgForOf, CommonModule, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PedidoService } from '../../services/pedido/pedido.service';

@Component({
  selector: 'pages-historico',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NgForOf,
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})

export class HistoricoComponent implements OnInit {
  pedidos: Array<any> = [];
  filtro: string | null = null;
  filtroPropriedade: string = 'id';
  ordenacaoAscendente: boolean = true;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidos = this.pedidoService.getPedidos();
    this.ordenar();
  }

  filtrar(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.filtro = valor !== '' ? valor : null;
  }

  alternarOrdenacao(): void {
    this.ordenacaoAscendente = !this.ordenacaoAscendente;
    this.ordenar();
  }

  ordenar(): void {
    this.pedidos.sort((a, b) => {
      const dataA = new Date(a.data).getTime();
      const dataB = new Date(b.data).getTime();
      return this.ordenacaoAscendente ? dataA - dataB : dataB - dataA;
    });
  }

  get filteredPedidos(): any[] {
    let pedidosFiltrados = this.pedidos;

    if (this.filtro) {
      pedidosFiltrados = pedidosFiltrados.filter((pedido) => {
        const propriedade = this.filtroPropriedade as keyof typeof pedido;
        const valorPropriedade = pedido[propriedade];
        return valorPropriedade
          ? valorPropriedade
              .toString()
              .toLowerCase()
              .includes(this.filtro!.toLowerCase())
          : false;
      });
    }

    return pedidosFiltrados;
  }
}
