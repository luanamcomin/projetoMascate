import { Injectable } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  constructor(private pedidoService: PedidoService) {}

  getProdutosMaisSolicitados() {
    // Obtenha todos os pedidos
    const pedidos = this.pedidoService.getPedidos();

    // Crie um objeto para armazenar a contagem de cada produto
    const contagemProdutos: { [key: string]: number } = {};

    // Itere sobre cada pedido
    for (const pedido of pedidos) {
      // Itere sobre cada item no pedido
      for (const item of pedido.itens) {
        // Se o produto já existe no objeto contagemProdutos, incremente a contagem
        // Caso contrário, adicione o produto ao objeto com a contagem inicial de 1
        contagemProdutos[item.nome] = (contagemProdutos[item.nome] || 0) + 1;
      }
    }

    // Retorne o objeto contagemProdutos
    return contagemProdutos;
  }

  getPedidosPorUnidade() {
    // Obtenha todos os pedidos
    const pedidos = this.pedidoService.getPedidos();

    // Crie um objeto para armazenar a contagem de pedidos para cada unidade
    const contagemUnidades: { [key: string]: number } = {};

    // Itere sobre cada pedido
    for (const pedido of pedidos) {
      // Se a unidade já existe no objeto contagemUnidades, incremente a contagem
      // Caso contrário, adicione a unidade ao objeto com a contagem inicial de 1
      contagemUnidades[pedido.unidade] = (contagemUnidades[pedido.unidade] || 0) + 1;
    }

    // Retorne o objeto contagemUnidades
    return contagemUnidades;
  }

  getVendasDiarias() {
    // Obtenha todos os pedidos
    const pedidos = this.pedidoService.getPedidos();

    // Crie um objeto para armazenar a contagem de vendas para cada dia
    const vendasDiarias: { [key: string]: number } = {};

    // Itere sobre cada pedido
    for (const pedido of pedidos) {
      // Obtenha a data do pedido
      const data = new Date(pedido.data).toDateString();

      // Se a data já existe no objeto vendasDiarias, incremente a contagem
      // Caso contrário, adicione a data ao objeto com a contagem inicial de 1
      vendasDiarias[data] = (vendasDiarias[data] || 0) + 1;
    }

    // Retorne o objeto vendasDiarias
    return vendasDiarias;
  }

  getVendasMensais() {
    // Obtenha todos os pedidos
    const pedidos = this.pedidoService.getPedidos();

    // Crie um objeto para armazenar a contagem de vendas para cada mês
    const vendasMensais: { [key: string]: number } = {};

    // Itere sobre cada pedido
    for (const pedido of pedidos) {
      // Obtenha o mês do pedido
      const data = new Date(pedido.data);
      const mes = `${data.getMonth() + 1}-${data.getFullYear()}`;

      // Se o mês já existe no objeto vendasMensais, incremente a contagem
      // Caso contrário, adicione o mês ao objeto com a contagem inicial de 1
      vendasMensais[mes] = (vendasMensais[mes] || 0) + 1;
    }

    // Retorne o objeto vendasMensais
    return vendasMensais;
  }
}
