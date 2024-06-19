import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgForOf, CommonModule, JsonPipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'pages-historico',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgForOf, CommonModule, MatFormFieldModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  pedidos: { id: number, data: Date, hora: string, unidade: string, status: string }[] = [
    { id: 1, data: new Date('2024-05-11'), hora: '10:30', unidade: 'Lanchonete', status: 'Concluído' },
    { id: 2, data: new Date('2024-05-13'), hora: '15:00', unidade: 'Cafeteria', status: 'Concluído' },
    { id: 3, data: new Date('2024-05-14'), hora: '14:45', unidade: 'Lanchonete', status: 'Concluído' },
    { id: 4, data: new Date('2024-05-15'), hora: '15:00', unidade: 'Cafeteria', status: 'Concluído' },
    { id: 5, data: new Date('2024-05-16'), hora: '08:00', unidade: 'Cafeteria', status: 'Concluído' },
    { id: 6, data: new Date('2024-05-20'), hora: '09:15', unidade: 'Lanchonete', status: 'Concluído' },
    { id: 7, data: new Date('2024-05-21'), hora: '11:00', unidade: 'Lanchonete', status: 'Concluído' },
  ];

  filtro: string | null = null;
  filtroPropriedade: string = 'id';
  ordem: string = 'mais-novos';
  ordenacaoAscendente: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.ordenar(); // Ordenar ao iniciar
  }

  filtrar(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.filtro = valor !== '' ? valor : null;
  }

  filtrarPropriedade(event: Event): void {
    const propriedade = (event.target as HTMLSelectElement).value;
    this.filtroPropriedade = propriedade;
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
        return valorPropriedade ? valorPropriedade.toString().toLowerCase().includes(this.filtro!.toLowerCase()) : false;
      });
    }

    return pedidosFiltrados;
  }
}


