import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { PedidoService } from '../../services/pedido/pedido.service';
import { CommonModule } from '@angular/common';

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
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
    this.pedidos = this.pedidoService.getPedidos();
  }

  atualizarStatus(pedidoId: number, status: string) {
    this.pedidoService.updatePedidoStatus(pedidoId, status);
  }
}