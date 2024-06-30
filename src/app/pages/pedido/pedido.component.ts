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
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProdutoService } from '../../services/produto/produto.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

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
    MatSnackBarModule,
    MatSelectModule
  ],
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})

export class PedidoComponent implements OnInit {
  searchItem: string = '';
  allProducts: Array<Produtos> = [];
  cartList: Array<Produtos> = [];
  addedItems: Array<Produtos> = [];
  dataSolicitacao: Date = new Date();
  responsavel: string = '';
  unidade: string = 'lanchonete';
  observacaoGeral: string = '';

  constructor(
    public dialog: MatDialog,
    public pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar
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
    if (this.searchItem) {
      let item: Produtos = this.allProducts.find((product) =>
        product.nome.toLowerCase().includes(this.searchItem.toLowerCase())
      )!;
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
  }

  decreaseQuantity(item: Produtos) {
    if (item.quantidade && item.quantidade > 0) {
      item.quantidade -= 1;
    }
  }

  openDialog(item: Produtos) {
    const dialogRef = this.dialog.open(ModalProdutoComponent, { data: { item: item } });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addedItems.push(result);
      }
    });
  }

  finalizarPedido() {
    const pedido = {
      responsavel: this.responsavel,
      unidade: this.unidade,
      dataSolicitacao: this.dataSolicitacao,
      observacaoGeral: this.observacaoGeral,
      status: 'em analise',
      items: this.addedItems.map((item) => ({
        id: item.idProduto,
        nome: item.nome,
        quantidade: item.quantidade || 1,
        sabor: item.sabor,
        observacao: item.observacao,
      })),
    };

    const pedidoId = this.pedidoService.finalizarPedido(pedido);

    this.snackBar.open(
      `Pedido #${pedidoId} finalizado com sucesso!`,
      'Fechar',
      {
        duration: 5000,
      }
    );

    this.responsavel = '';
    this.unidade = 'lanchonete';
    this.observacaoGeral = '';
    this.searchItem = '';
    this.addedItems = [];
  }
}
