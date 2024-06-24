import { Injectable } from '@angular/core';
import { Produtos } from '../../models/produtos';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  cart: Array<Produtos> = [];

/*   pedido: Array<> = []; */

  constructor() {}

  getCart() {
    return this.cart;
  }

  setCart(item: Produtos) {
    this.cart.push(item);
  }


}
