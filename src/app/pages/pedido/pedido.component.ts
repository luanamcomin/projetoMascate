import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { Produtos } from '../../models/produtos';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../services/pedido/pedido.service';
import { ModalProdutoComponent } from '../../components/modal-produto/modal-produto.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatToolbar,
    MatListModule,
    CartItemComponent,
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})
export class PedidoComponent {
  cartList: Array<Produtos> = [];

  constructor(
    public dialog: MatDialog,
    public pedidoService: PedidoService
  ) {}

  removeFromCart(item: Produtos) {
    const index = this.cartList.indexOf(item);
    if (index > -1) {
      this.cartList.splice(index, 1);
    }
  }

  increaseQuantity(item: Produtos) {
    item.quantidade = (item.quantidade || 0) + 1;
  }

  decreaseQuantity(item: Produtos) {
    if (item.quantidade && item.quantidade > 0) {
      item.quantidade -= 1;
    }
  }

  openDialog(item: Produtos) {
    this.dialog.open(ModalProdutoComponent, { data: { item: item } });
  }
}
