import { Injectable } from '@angular/core';
import { Produtos } from '../../models/produtos';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private cart: Array<Produtos> = [];
  private pedidos: Array<any> = []; // Adicione um array para armazenar os pedidos finalizados

  getCart() {
    return this.cart;
  }

  setCart(item: Produtos) {
    this.cart.push(item);
  }

  finalizarPedido(pedido: any) {
    this.pedidos.push(pedido);
  }

  getPedidos() {
    return this.pedidos;
  }
}
