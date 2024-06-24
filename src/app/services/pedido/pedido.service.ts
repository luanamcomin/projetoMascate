import { Injectable } from '@angular/core';
import { Produtos } from '../../models/produtos';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private cart: Array<Produtos> = [];
  private pedidos: Array<any> = []; // Array para armazenar os pedidos finalizados

  getCart() {
    return this.cart;
  }

  setCart(item: Produtos) {
    this.cart.push(item);
  }

  finalizarPedido(pedido: any): number {
    pedido.id = this.generatePedidoId();
    this.pedidos.push(pedido);
    return pedido.id; // Retornar o ID do pedido
  }

  getPedidos() {
    return this.pedidos;
  }

  private generatePedidoId(): number {
    return this.pedidos.length > 0
      ? this.pedidos[this.pedidos.length - 1].id + 1
      : 1;
  }
}
