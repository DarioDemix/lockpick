import { Component, OnInit, Injectable } from "@angular/core";
import { LoginService } from "../login.service";
import { User } from "src/app/model/User";
import { Router } from "@angular/router";

/** per il recupero password */

import { MatDialog } from "@angular/material";
import Swal from "sweetalert2";
import { RecuperoPasswordService } from "../../recupero-psw/recuperopassword.service";
import { ShareProviderService } from "src/app/service/share-provider.service";
import { CarrelloService } from "src/app/service/carrello.service";
import { Location } from "@angular/common";

export interface DialogData {
  mail: string;
}

/** fine finestra dialogo recupero password */

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: Router,
    public dialog: MatDialog,
    private recuperoPwdService: RecuperoPasswordService,
    private shareProvider: ShareProviderService,
    private carrelloService: CarrelloService,
    private location: Location
  ) {}

  // valore per gestire la mail nella finestra e nel backend

  mail: string;
  private user: User = new User();
  homepage: boolean = false;

  /** metodi per creazione ,richiamo e visualizzazione della finestra di dialogo */
  //recupero psw

  async openDialog(): Promise<void> {
    const { value: email } = await Swal.fire({
      title: "Inserisci la mail",
      input: "email",
      inputPlaceholder: "Indirizzo email",
    });
    if (email) {
      this.user.email = email;
      this.recuperoPwdService.recuperoPwd(this.user).subscribe((res) => {
        Swal.fire({
          type: "success",
          text: "Email inviata a " + email,
        }),
          (err) => {
            Swal.fire({
              type: "error",
              text: "errore! " + err,
            });
          };
      });
    }
  }

  /** fine metodi dialogo  */

  ngOnInit(): void {}

  private loginUserData: User = new User();

  submitted = false;
  datiErrati = false;

  onSubmit() {
    this.submitted = true;
    this.loginUser();
  }

  // ciao Utente
  salutoUtente(user: User) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });

    Toast.fire({
      type: "success",
      title: "Ciao " + user.username,
    });
  }

  loginUser() {
    if (this.submitted == false) return;

    this.loginService.loginUser(this.loginUserData).subscribe(
      //se il login va a buon fine, setto il currentUser nello shareProvider e
      // l'utente viene reindirizzato alla homepage
      (user) => {
        //se l'utente deve cambiare la psw provvisoria, lo reindirizzo in recuperoPsw
        this.shareProvider.setCurrentUser(user);
        if (!user.resetPassword) {
          this.carrelloService.getAll(user.idUser).subscribe();
          console.log(user);
          this.salutoUtente(user);

          if (this.loginService.getHomepage()) {
            this.loginService.setHomepage(false);
            this.route.navigateByUrl("/homepage");
          } else this.location.back();
        } else {
          this.route.navigateByUrl("/recuperoPsw");
        }
      },
      (err) => {
        console.log(err);
        this.datiErrati = true;
      }
    );
  }
}
