import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Produtos, Sabores } from '../../models/produtos';
import { PedidoService } from '../../services/pedido/pedido.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-produto',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css'],
})

export class ModalProdutoComponent {
  produto!: Produtos;
  selectedValue!: Sabores;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { item: Produtos },
    public pedidoService: PedidoService
  ) {
    this.produto = this.data.item;
    this.produto.quantidade = this.produto.quantidade || 1; // Inicializar a quantidade
  }

  addToCart() {
    this.produto.sabor = [this.selectedValue];
    this.pedidoService.setCart(this.produto);
  }

  increaseQuantity() {
    this.produto.quantidade = (this.produto.quantidade || 0) + 1;
  }

  decreaseQuantity() {
    if (this.produto.quantidade && this.produto.quantidade > 0) {
      this.produto.quantidade -= 1;
    }
  }
}
