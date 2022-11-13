export class Catalogo{
    idCatalogo: number;
    nomeProdotto: string;
    descrProdotto: string;
    prezzoProdotto: number;
    qtaProdotto: number;
    img;
    idProduttore: number;
    idCategoria: number;



    //tostring...

    clona(catalogo: Catalogo){
        this.idCatalogo = catalogo.idCatalogo;
        this.nomeProdotto = catalogo.nomeProdotto;
        this.descrProdotto = catalogo.descrProdotto;
        this.prezzoProdotto = catalogo.prezzoProdotto;
        this.qtaProdotto = catalogo.qtaProdotto;
        this.img = catalogo.img;
    }

}
