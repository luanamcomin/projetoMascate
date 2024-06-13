import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  pedido: number;
  data: number;
  unidade: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pedido: 123456, data: 11, unidade: 'Lanchonete', status: 'Em processamento'},
  {pedido: 654321, data: 13, unidade: 'Cafeteria', status: 'Confirmado'},
  {pedido: 645342, data: 14, unidade: 'Lanchonete', status: 'Finalizado'},
  {pedido: 132435, data: 15, unidade: 'Cafeteria', status: 'Finalizado'},
  {pedido: 321456, data: 16, unidade: 'Cafeteria', status: 'Finalizado'},
  {pedido: 654123, data: 20, unidade: 'Lanchonete', status: 'Cancelado'},
  {pedido: 546312, data: 21, unidade: 'Lanchonete', status: 'Finalizado'}
];
@Component({
  selector: 'app-tabelas',
  styleUrl: './tabelas.component.css',
  templateUrl: './tabelas.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
})
export class TabelasComponent {
  displayedColumns: string[] = ['pedido', 'data', 'unidade', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

/*
import { Component, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';

interface Pedido {
  numero: string;
  hora: string;
  tipo: string;
  data?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    this.pedidosService.getPedidos().subscribe((data: Pedido[]) => {
      this.pedidos = data;
    });
  }
}

 */
