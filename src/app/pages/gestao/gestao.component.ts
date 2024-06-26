import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { PedidoService } from '../../services/pedido/pedido.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gestao',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.css'],
})

export class GestaoComponent implements OnInit {
  readonly panelOpenState = signal(false);
  pedidos: Array<any> = [];

  constructor(
    private pedidoService: PedidoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.pedidos = this.pedidoService.getPedidos();
  }

  atualizarStatus(pedidoId: number, status: string) {
    this.pedidoService.updatePedidoStatus(pedidoId, status);
    this.showSnackBar(`Status do pedido #${pedidoId} atualizado para ${status}`);
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
    });
  }

  getButtonClass(pedido: any, status: string) {
    switch (status) {
      case 'em preparacao':
        return pedido.status === 'em preparacao' ? 'btn btn-primary' : 'btn btn-outline-primary';
      case 'finalizado':
        return pedido.status === 'finalizado' ? 'btn btn-success' : 'btn btn-outline-success';
      case 'cancelado':
        return pedido.status === 'cancelado' ? 'btn btn-danger' : 'btn btn-outline-danger';
      default:
        return 'btn btn-outline-secondary';
    }
  }
}
