import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedidos } from '../../models/pedidos';
import { Produtos } from '../../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  cart: Array<Produtos> = [];

  constructor() {}

  getCart() {
    return this.cart;
  }

  setCart(item: Produtos) {
    this.cart.push(item);
  }
}
