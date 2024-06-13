export interface Pedidos {
  idPedido: number;
  idFuncionario: number,
  idUnidade: number;
  observacao: string;
  dataHoraSolicitada: Date;
  status: string;
  idProduto: number;
}
