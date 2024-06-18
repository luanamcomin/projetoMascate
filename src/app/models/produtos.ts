export interface Produtos {
  idProduto: number;
  nome: string;
  tipo: string;
  descricao: string;
  urlImagem: string;
  sabor: string;
  quantidade?: number;
}
