import { DadoVendaMarketplace } from "./dado-venda-marketplace.model";
import { Marketplace } from "./marketplace.model";

export class Anuncio {
    id:number;
    idUsuario:number;
    idMarketplace:number;
    statusAnuncio:number;
    preco:number;
    marketplace:Marketplace;
    anuncio:Anuncio;
}
