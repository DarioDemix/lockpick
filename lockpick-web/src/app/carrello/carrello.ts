export class Carrello{
    idProdotto: number;
    idOrdine: number;
    nomeProdotto: string;
    prezzoProdotto: number;
    qtaOrdinata: number;
    img;
    idCatalogo: number;

    constructor(idProdotto: number, idOrdine: number, nomeProdotto: string,
                prezzoProdotto: number, qtaOrdinata: number, img, idCatalogo: number){
                    
                    this.idProdotto = idProdotto;
                    this.idOrdine = idOrdine;
                    this.nomeProdotto = nomeProdotto;
                    this.prezzoProdotto = prezzoProdotto;
                    this.qtaOrdinata = qtaOrdinata;
                    this.img = img;
                }
}