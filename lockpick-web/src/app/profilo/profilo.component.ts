import { Component, OnInit } from "@angular/core";
import { ShareProviderService } from "../service/share-provider.service";
import { User } from "../model/User";
import Swal from "sweetalert2";
import { StringifyOptions } from "querystring";

@Component({
  selector: "app-profilo",
  templateUrl: "./profilo.component.html",
  styleUrls: ["./profilo.component.css"],
})
export class ProfiloComponent implements OnInit {
  constructor(private sharedProvider: ShareProviderService) {}

  private isLogged = this.sharedProvider.isLogged();
  private datiUser: User = this.sharedProvider.getCurrentUser();

  modificaUsername() {
    let username: string = this.sharedProvider.getCurrentUser().username;
    let usernameCampo: string;
    Swal.fire({
      title: "Inserisci il nuovo username",
      input: "text",
      inputValue: usernameCampo,
      showCancelButton: true,

      inputValidator: (usernameCampo) => {
        if (!usernameCampo) return "Devi inserire qualcosa!";
        else {
          if (usernameCampo == username)
            return "Lo username è uguale al precendente!";
          else {
            this.sharedProvider.user.username = usernameCampo;
            return "Lo username è stato cambiato!";
          }
        }
      },
    });
  }

  modificaPassword() {
    console.log("richesta DB descriptatura pwd");

    let pwd: string = ""; //da prendere leggibile dal DB
    let pwdControllo: string = "";
    let pwdNuova: string = "";

    Swal.fire({
      title: "Inserisci la password precedente",
      input: "password",
      inputValue: pwdControllo,
      inputValidator: (pwdControllo) => {
        if (!pwdControllo) return "Devi inserire qualcosa!";
        else {
          if (pwdControllo == pwd)
            return "La password è uguale alla precendente!";
        }
      },
    });
    //da finire
  }

  modificaIndirizzo() {
    let via: string = this.sharedProvider.getCurrentUser().indirizzo;
    let citta: string = this.sharedProvider.getCurrentUser().citta;
    let numeroCivico: string =
      this.sharedProvider.getCurrentUser().numeroCivico;
    let cap: number = this.sharedProvider.getCurrentUser().cap;

    let viaCampo: string = "";
    let cittaCampo: string = "";
    let nCivicoCampo: string = "";
    let capCampo: string = "";

    Swal.fire({
      title: "Modifica indirizzo",
      html:
        'Via <input class="swal2-input" id="via" type="text">' +
        'Numero civico <input class="swal2-input" id="nCivico" type="text">' +
        'Città <input class="swal2-input" id="citta" type="text">' +
        'CAP <input class="swal2-input" id="cap" type="number">',
      focusConfirm: false,
    });
    //da finire
  }

  ngOnInit() {}
}
