import { Anuncio } from "./anuncio.model";
import { Variacao } from "./variacao.model";

export class Produto {

  id: number;
  nome: string;
  estoque: number;
  descricao: string;
  dirFotos: string;
  fotos: Array<string>;
  tempoGarantia: number;
  preco: number;
  variacoes: Array<Variacao> = new Array<Variacao>();
  anuncios: Array<Anuncio> = new Array<Anuncio>();

}
