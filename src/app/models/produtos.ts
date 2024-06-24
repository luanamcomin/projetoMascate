export type Sabores =
  | 'frango'
  | 'carne de sol'
  | 'fit'
  | 'misto'
  | 'queijo'
  | 'camarão'
  | 'especial'
  | 'lorraine'
  | 'integral'
  | 'chocolate'
  | 'chocolate branco'
  | 'prestigio'
  | 'morango'
  | 'limão'
  | 'maracujá'
  | 'tradicional'
  | 'leite condensado'
  | 'doce de leite'
  | 'alemã'
  | 'banana'
  | 'ricota'
  | 'palha italiana'
  | 'ameixa'
  | 'crocante'
  | 'prestígio'
  | 'brigadeiro';


export interface Produtos {
  idProduto: number;
  nome: string;
  tipo: string;
  descricao: string;
  urlImagem: string;
  sabor: Array<Sabores>;
  quantidade?: number;
}
