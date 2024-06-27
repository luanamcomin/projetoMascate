import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PedidoService } from '../../services/pedido/pedido.service';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  pedido: number;
  data: string;
  unidade: string;
  status: string;
}

@Component({
  selector: 'app-tabelas',
  styleUrls: ['./tabelas.component.css'],
  templateUrl: './tabelas.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, CommonModule],
})
export class TabelasComponent implements OnInit {
  displayedColumns: string[] = ['pedido', 'data', 'unidade', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.loadPedidos();
  }

  loadPedidos() {
    const pedidos = this.pedidoService.getPedidos();
    const formattedPedidos = pedidos.map(pedido => ({
      pedido: pedido.id,
      data: new Date(pedido.dataSolicitacao).toLocaleDateString(),
      unidade: pedido.unidade,
      status: pedido.status,
    }));
    this.dataSource.data = formattedPedidos;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
