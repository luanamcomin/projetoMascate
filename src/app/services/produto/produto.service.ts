import { Injectable } from '@angular/core';
import { Produtos, Sabores } from '../../models/produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  product: Array<Produtos> = [
    {
      idProduto: 0,
      nome: 'coxinha',
      tipo: 'salgado',
      descricao: 'qualquer coisa',
      urlImagem: '../assets/coxinha.png',
      sabor: ['frango', 'carne de sol', 'fit'],
    },
    {
      idProduto: 1,
      nome: 'bolo de pote',
      tipo: 'doce',
      descricao: 'qualquer coisa',
      urlImagem: '../assets/boloPote.png',
      sabor: ['chocolate', 'chocolate branco', 'prestigio', 'morango'],
    },
    {
      idProduto: 2,
      nome: 'pão pizza',
      tipo: 'salgado',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/paoPizzza.png',
      sabor: ['misto', 'integral'],
    },
    {
      idProduto: 2,
      nome: 'brigadeiro',
      tipo: 'doce',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/brigadeiro.png',
      sabor: ['tradicional'],
    },
    {
      idProduto: 2,
      nome: 'croassant',
      tipo: 'salgado',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/croassant.png',
      sabor: ['frango', 'misto', 'queijo'],
    },
    {
      idProduto: 2,
      nome: 'empada',
      tipo: 'salgado',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/empada.png',
      sabor: ['frango', 'camarão'],
    },
    {
      idProduto: 2,
      nome: 'folheado',
      tipo: 'salgado',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/folheado.png',
      sabor: ['frango', 'carne de sol', 'camarão'],
    },
    {
      idProduto: 2,
      nome: 'mousse',
      tipo: 'doce',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/mousse.png',
      sabor: ['limão', 'maracujá'],
    },
    {
      idProduto: 2,
      nome: 'pudim',
      tipo: 'doce',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/pudim.png',
      sabor: ['tradicional'],
    },
    {
      idProduto: 2,
      nome: 'quiche',
      tipo: 'salgado',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/quiche.png',
      sabor: ['especial', 'camarão', 'lorraine'],
    },
    {
      idProduto: 2,
      nome: 'torta',
      tipo: 'doce',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/torta.png',
      sabor: [
        'alemã',
        'banana',
        'limão',
        'morango',
        'ricota',
        'palha italiana',
        'ameixa',
        'crocante',
        'brigadeiro',
        'prestigio',
      ],
    },
    {
      idProduto: 2,
      nome: 'tratalete',
      tipo: 'doce',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/tratalete.png',
      sabor: ['leite condensado', 'chocolate', 'doce de leite', 'morango'],
    },
  ];

  constructor() {}

  getProducts() {
    return this.product;
  }

  setCart(item: Produtos) {
    this.product.push(item);
  }
}
