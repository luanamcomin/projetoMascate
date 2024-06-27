import { Injectable } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Produtos } from '../../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  constructor(private pedidoService: PedidoService) {}

  getProdutosMaisSolicitados() {
    const pedidos = this.pedidoService.getPedidos();
    const produtosCount = pedidos.flatMap(pedido => pedido.items)
      .reduce((acc, item: Produtos) => {
        acc[item.nome] = (acc[item.nome] || 0) + item.quantidade!;
        return acc;
      }, {} as { [key: string]: number });

    return Object.keys(produtosCount)
      .map(nome => ({
        nome,
        quantidade: produtosCount[nome]
      }))
      .sort((a, b) => b.quantidade - a.quantidade);
  }

  getPedidosPorUnidade() {
    const pedidos = this.pedidoService.getPedidos();
    const unidadesCount = pedidos.reduce((acc, pedido) => {
      acc[pedido.unidade] = acc[pedido.unidade] || [];
      acc[pedido.unidade].push(pedido.dataSolicitacao);
      return acc;
    }, {} as { [key: string]: Date[] });

    return Object.keys(unidadesCount)
      .map(unidade => ({
        unidade,
        pedidos: unidadesCount[unidade].length,
        datas: unidadesCount[unidade].map((data: string | Date) => new Date(data).toLocaleDateString())
      }))
      .sort((a, b) => b.pedidos - a.pedidos);
  }

  getVendasDiarias() {
    const pedidos = this.pedidoService.getPedidos();
    const vendasDiarias = pedidos.reduce((acc, pedido) => {
      const data: string = new Date(pedido.dataSolicitacao).toLocaleDateString();
      acc[data] = (acc[data] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(vendasDiarias)
      .map(data => ({
        data,
        vendas: vendasDiarias[data]
      }))
      .sort((a, b) => b.vendas - a.vendas);
  }

  getVendasMensais() {
    const pedidos = this.pedidoService.getPedidos();
    const vendasMensais = pedidos.reduce((acc, pedido) => {
      const data = new Date(pedido.dataSolicitacao);
      const mes: string = `${data.getMonth() + 1}/${data.getFullYear()}`;
      acc[mes] = (acc[mes] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(vendasMensais)
      .map(mes => ({
        mes,
        vendas: vendasMensais[mes]
      }))
      .sort((a, b) => b.vendas - a.vendas);
  }
}
