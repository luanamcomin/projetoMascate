export interface Pedidos {
  idPedido: number;
  idFuncionario: number;
  idUnidade: number;
  observacao: string;
  data?: Date;
  status: string;
  idProduto: number; //provavelmente aqui será uma array dos produtos do carrinho
}
