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

  getHorariosPedidos() {
    const pedidos = this.pedidoService.getPedidos();
    const horariosPedidos = pedidos.reduce((acc, pedido) => {
      const horario = new Date(pedido.dataSolicitacao).getHours();
      acc[horario] = (acc[horario] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(horariosPedidos)
      .map(horario => ({
        horario: `${horario}:00`,
        quantidade: horariosPedidos[horario]
      }))
      .sort((a, b) => b.quantidade - a.quantidade);
  }

  getDesempenhoProdutos() {
    const pedidos = this.pedidoService.getPedidos();
    const produtosCount = pedidos.flatMap(pedido => pedido.items)
      .reduce((acc, item: Produtos) => {
        acc[item.nome] = acc[item.nome] || { quantidade: 0, tempoPreparo: 0 };
        acc[item.nome].quantidade += item.quantidade!;
        return acc;
      }, {} as { [key: string]: { quantidade: number, tempoPreparo: number } });

    return Object.keys(produtosCount)
      .map(nome => ({
        nome,
        quantidade: produtosCount[nome].quantidade,
        tempoPreparo: produtosCount[nome].tempoPreparo
      }))
      .sort((a, b) => b.quantidade - a.quantidade);
  }

  getPedidosPorPeriodo(startDate: Date, endDate: Date) {
    const pedidos = this.pedidoService.getPedidos();
    const pedidosPeriodo = pedidos.filter(pedido => {
      const dataPedido = new Date(pedido.dataSolicitacao);
      return dataPedido >= startDate && dataPedido <= endDate;
    });

    const pedidosCount = pedidosPeriodo.reduce((acc, pedido) => {
      const data = new Date(pedido.dataSolicitacao).toLocaleDateString();
      acc[data] = (acc[data] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(pedidosCount)
      .map(data => ({
        data,
        quantidade: pedidosCount[data],
        unidade: pedidosPeriodo.find(pedido => new Date(pedido.dataSolicitacao).toLocaleDateString() === data)!.unidade
      }))
      .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
  }

  getTempoPreparo() {}
}
