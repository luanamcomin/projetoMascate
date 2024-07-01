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
//import * as XLSX from 'xlsx';
//import * as jsPDF from 'jspdf';
//import 'jspdf-autotable';
import { FormsModule } from '@angular/forms';

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
    MatLabel,
    FormsModule
  ],
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.css',
})
export class RelatoriosComponent {
  relatorio: any;
  tituloRelatorio!: string;
  displayedColumns: string[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;

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
      case 'horarios':
        this.relatorio = this.relatorioService.getHorariosPedidos();
        this.tituloRelatorio = 'Relatório de Horários de Pedidos';
        this.displayedColumns = ['horario', 'quantidade'];
        break;
      /* case 'tempoPreparo':
        this.relatorio = this.relatorioService.getTempoPreparo();
        this.tituloRelatorio = 'Relatório de Tempo de Preparo';
        this.displayedColumns = ['nome', 'tempoPreparo'];
        break; */
      case 'desempenhoProdutos':
        this.relatorio = this.relatorioService.getDesempenhoProdutos();
        this.tituloRelatorio = 'Relatório de Desempenho de Produtos';
        this.displayedColumns = ['nome', 'quantidade', 'tempoPreparo'];
        break;
      case 'pedidosPeriodo':
        if (this.startDate && this.endDate) {
          this.relatorio = this.relatorioService.getPedidosPorPeriodo(this.startDate, this.endDate);
          this.tituloRelatorio = 'Relatório de Pedidos por Período';
          this.displayedColumns = ['data', 'quantidade', 'unidade'];
        }
        break;
    }
  }

  exportToExcel() {
    //const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.relatorio);
    //const wb: XLSX.WorkBook = XLSX.utils.book_new();
    //XLSX.utils.book_append_sheet(wb, ws, 'Relatorio');
    //XLSX.writeFile(wb, `${this.tituloRelatorio}.xlsx`);
  }

  exportToPDF() {
    //const doc = new jsPDF.default();
    //doc.text(this.tituloRelatorio, 10, 10);
    //(doc as any).autoTable({
    //  head: [this.displayedColumns],
    //  body: this.relatorio.map((row: any) => this.displayedColumns.map(col => row[col])),
    //});
    //doc.save(`${this.tituloRelatorio}.pdf`);
  }
}