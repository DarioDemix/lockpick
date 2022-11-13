export class User {
    idUser: number;
    username: string;
    email: string;
    password: string;
    nome: string;
    cognome: string;
    indirizzo: string;
    numeroCivico: string;
    citta: string;
    cap: number;
    amministratore: number;
    resetPassword: boolean;

    //Costruttore volendo eliminabile 
   /* constructor(user: User){
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.nome = user.nome;
        this.cognome = user.cognome;
        this.indirizzo = user.indirizzo;
        this.nCivico = user.nCivico;
        this.citta = user.citta;
        this.cap = user.cap;
        this.amministratore = 0;
    }*/

    constructor(){}

    //Metodo per settare i dati
    setDati(username: string, email: string, password: string, nome: string, cognome: string,
            indirizzo: string, numeroCivico: string, citta: string, cap: number, amministratore: number ): void{
        
        this.username = username;
        this.email = email;
        this.password = password;
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzo = indirizzo;
        this.numeroCivico = numeroCivico;
        this.citta = citta;
        this.cap = cap;
        this.amministratore = amministratore;
    }
}