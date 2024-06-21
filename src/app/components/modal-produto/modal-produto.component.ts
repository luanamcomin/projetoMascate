import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Produtos } from '../../models/produtos';
import { PedidoService } from '../../services/pedido/pedido.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}
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
  styleUrl: './modal-produto.component.css',
})

export class ModalProdutoComponent {
  produto!: Produtos;

  selectedValue!: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { item: Produtos },
    public pedidoService: PedidoService
  ) {
    this.produto = this.data.item;
  }

  addToCart() {
    this.pedidoService.setCart(this.produto);
  }

  increaseQuantity(item: Produtos) {
    item.quantidade = (item.quantidade || 0) + 1;
    console.log(this.produto);
  }

  decreaseQuantity(item: Produtos) {
    if (item.quantidade && item.quantidade > 0) {
      item.quantidade -= 1;
    }
  }
}

