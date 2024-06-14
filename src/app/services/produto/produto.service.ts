import { Injectable } from '@angular/core';
import { Produtos } from '../../models/produtos';

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
      urlImagem: '../assets/coxinha.png'
    },
    {
      idProduto: 1,
      nome: 'bolo de pote',
      tipo: 'doce',
      descricao: 'qualquer coisa',
      urlImagem: '../assets/coxinha.png'
    },
    {
      idProduto: 2,
      nome: 'pão pizza',
      tipo: 'salgado',
      descricao: 'qualquer outra coisa',
      urlImagem: '../assets/coxinha.png'
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
