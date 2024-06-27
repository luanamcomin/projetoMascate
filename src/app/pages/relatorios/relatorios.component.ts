import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RelatorioService } from '../../services/relatorio/relatorio.service';
import {
  MatDatepicker,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatDatepicker,
    MatFormField,
    MatDatepickerToggle,
    CommonModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatLabel
  ],
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.css',
})
export class RelatoriosComponent {
  relatorio: any;
  tituloRelatorio!: string;
  displayedColumns: string[] = [];

  constructor(private relatorioService: RelatorioService) {}

  gerarRelatorio(tipo: string) {
    switch (tipo) {
      case 'produtos':
        this.relatorio = this.relatorioService.getProdutosMaisSolicitados();
        this.tituloRelatorio = 'Produtos Mais Solicitados';
        this.displayedColumns = ['nome', 'quantidade'];
        break;
      case 'unidade':
        this.relatorio = this.relatorioService.getPedidosPorUnidade();
        this.tituloRelatorio = 'Pedidos por Unidade';
        this.displayedColumns = ['unidade', 'pedidos', 'datas'];
        break;
      case 'diario':
        this.relatorio = this.relatorioService.getVendasDiarias();
        this.tituloRelatorio = 'Vendas Diárias';
        this.displayedColumns = ['data', 'vendas'];
        break;
      case 'mensal':
        this.relatorio = this.relatorioService.getVendasMensais();
        this.tituloRelatorio = 'Vendas Mensais';
        this.displayedColumns = ['mes', 'vendas'];
        break;
    }
  }
}