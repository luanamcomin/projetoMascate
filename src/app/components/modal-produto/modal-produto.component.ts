import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Produtos } from '../../models/produtos';
import { ProdutoService } from '../../services/produto/produto.service';
import { PedidoService} from '../../services/pedido/pedido-service.service';

@Component({
  selector: 'app-modal-produto',
  standalone: true,
  imports: [MatButtonModule,
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions,
            MatDialogClose,
            MatButtonModule],
  templateUrl: './modal-produto.component.html',
  styleUrl: './modal-produto.component.css'
})
export class ModalProdutoComponent {

  produto!: Produtos;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {item: Produtos}, public pedidoService: PedidoService) {
    this.produto = this.data.item;
  }

  addToCart() {
    this.pedidoService.setCart(this.produto);
  }
}
