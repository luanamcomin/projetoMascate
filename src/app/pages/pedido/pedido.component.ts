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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProdutoService } from '../../services/produto/produto.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    ProductCardComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})
export class PedidoComponent {
  searchItem: string = '';
  allProducts: Array<Produtos> = [];
  cartList: Array<Produtos> = [];
  addedItems: Array<Produtos> = [];

  constructor(
    public dialog: MatDialog,
    public pedidoService: PedidoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.allProducts = this.produtoService.getProducts();
    this.addedItems = this.pedidoService.getCart();
  }

  search() {
    if (this.searchItem) {
      this.cartList = this.allProducts.filter((product) =>
        product.nome.toLowerCase().includes(this.searchItem.toLowerCase())
      );
    } else {
      this.cartList = [];
    }
  }

  addToCart() {
    if(this.searchItem) {
      let item: Produtos = this.allProducts.filter((product) =>
        product.nome.toLowerCase().includes(this.searchItem.toLowerCase())
      )[0];
      this.addedItems.push(item);
    }
  }

  removeFromCart(item: Produtos) {
    const index = this.addedItems.indexOf(item);
    if (index > -1) {
      this.addedItems.splice(index, 1);
    }
  }

  increaseQuantity(item: Produtos) {
    item.quantidade = (item.quantidade || 0) + 1;
    console.log(this.addedItems);
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
