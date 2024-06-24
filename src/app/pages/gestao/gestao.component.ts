import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { GestaoService } from '../../services/gestao/gestao.service';
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
  styleUrl: './gestao.component.css',
})
export class GestaoComponent {
  readonly panelOpenState = signal(false);

  constructor(
    private gestaoService: GestaoService,
    public pedidoService: PedidoService
  ) {}

  finalizarPedido(numeroPedido: number) {
    // Lógica para finalizar o pedido com o número recebido
    console.log(`Pedido ${numeroPedido} finalizado.`);
    // Aqui você pode implementar lógica adicional, como chamar serviços, atualizar estados, etc.
  }
}
