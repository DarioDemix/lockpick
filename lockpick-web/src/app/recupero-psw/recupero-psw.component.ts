import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { compareValidation } from "../../custom-directive/compare-validators.directive";
import { ShareProviderService } from "../service/share-provider.service";
import { RecuperoPasswordService } from "./recuperopassword.service";
import { User } from "../model/User";
import Swal from "sweetalert2";
import { RouterLink, ActivatedRoute, Router } from "@angular/router";
import { timeout } from "rxjs/operators";
import { LoginService } from "../login/login.service";

@Component({
  selector: "app-recupero-psw",
  templateUrl: "./recupero-psw.component.html",
  styleUrls: ["./recupero-psw.component.css"],
})
export class RecuperoPswComponent implements OnInit {
  private userDaModificare;

  constructor(
    private sharedProvider: ShareProviderService,
    private recuperoPswService: RecuperoPasswordService,
    private route: Router,
    private loginService: LoginService
  ) {}
  ngOnInit() {
    this.userDaModificare = this.sharedProvider.getCurrentUser();
    this.sharedProvider.deleteCurrentUser();
  }
  recuperoPsw = new FormGroup({
    password: new FormControl("", [
      Validators.minLength(8),
      Validators.required,
      Validators.maxLength(16),
    ]),
    confermaPassword: new FormControl("", compareValidation("password")),
  });

  campoVuoto(campo: FormControl) {
    if (
      ((campo.dirty || campo.touched) && campo.value === null) ||
      campo.value === "" ||
      campo.value.lenght === 0
    )
      return true;
    else return false;
  }

  get getPassword() {
    return this.recuperoPsw.get("password");
  }
  get getConfermaPassword() {
    return this.recuperoPsw.get("confermaPassword");
  }

  onSubmit() {
    let userUpdated: User;
    this.userDaModificare.password = this.getPassword.value;
    userUpdated = this.userDaModificare;
    //console.log(userUpdated)
    this.recuperoPswService.resetPwd(userUpdated).subscribe(
      (res) => {
        this.loginService.setHomepage(true);
        console.log(res);
        Swal.fire({
          type: "success",
          text: "Password resettata con successo! Effettua il login.",
        });
        this.route.navigateByUrl("/login");
      },
      (err) => {
        Swal.fire({
          type: "error",
          text: "si è verificato un errore, riprova più tardi.",
        });
      }
    );
  }
}
