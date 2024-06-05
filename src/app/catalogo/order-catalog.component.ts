import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ModalProdutoComponent } from '../components/modal-produto/modal-produto.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

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
    MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule
  ],
  templateUrl: './order-catalog.component.html',
  styleUrl: './order-catalog.component.css'
})

export class OrderCatalogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalProdutoComponent);
  }
}

