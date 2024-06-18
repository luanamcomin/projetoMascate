import { Component, Input, input, signal } from '@angular/core';
import { Produtos } from '../../models/produtos';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoService } from '../../services/produto/produto.service';
import { PedidoService } from '../../services/pedido/pedido.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item = signal<any>(null);
  @Input() onRemove = signal<Function>(() => {});
  @Input() product!: Produtos;
  longText = `Descrição do produto`;
  productList: Array<Produtos> = [];

  constructor(
    public dialog: MatDialog,
    public productService: ProdutoService,
    public pedidoService: PedidoService
  ) {}

  removeItem() {
    this.onRemove()();
  }
}
