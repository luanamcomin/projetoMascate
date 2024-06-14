import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalProdutoComponent } from '../../components/modal-produto/modal-produto.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ProdutoService } from '../../services/produto/produto.service';
import { Produtos } from '../../models/produtos';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../services/pedido/pedido-service.service';

@Component({
  selector: 'app-order-catalog',
  standalone: true,
  imports: [
    ModalProdutoComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    ProductCardComponent,
    MatExpansionModule,
    MatButtonModule,
    MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule,
    CommonModule
  ],
  templateUrl: './order-catalog.component.html',
  styleUrl: './order-catalog.component.css'
})

export class OrderCatalogComponent {
  productList: Array<Produtos> = [];
  cartList: Array<Produtos> = [];


  constructor(public dialog: MatDialog, public productService: ProdutoService, public pedidoService: PedidoService) {
    this.loadProducts();
  }

  loadProducts() {
    this.productList = this.productService.getProducts();
    console.log(this.productList);
  }

  openDialog(item: Produtos) {
    this.dialog.open(ModalProdutoComponent, {data: {item: item}});
  }
}

