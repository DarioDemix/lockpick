import { Component, OnInit } from "@angular/core";

import { User } from "src/app/model/User";
import { RegistrazioneService } from "./registrazione.service";
import {
  FormGroup,
  Validators,
  FormControl,
  EmailValidator,
} from "@angular/forms";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import Swal from "sweetalert2";
import { compareValidation } from "../../../custom-directive/compare-validators.directive";
import { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from "@angular/core/src/view/provider";
import { LoginComponent } from "src/app/login/login/login.component";
import { Router } from "@angular/router";
import { LoginService } from "src/app/login/login.service";

@Component({
  selector: "app-registrazione",
  templateUrl: "./registrazione.component.html",
  styleUrls: ["./registrazione.component.css"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegistrazioneComponent implements OnInit {
  hide = TreeWalker;
  private regUserData: User = new User();
  submitted = false;
  registrazione: FormGroup;

  private esisteEmail: boolean = false;
  private esisteUsername: boolean = false;

  constructor(
    private registrazioneService: RegistrazioneService,
    private route: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.creaForm();
  }

  // crea formGRoup
  creaForm() {
    this.registrazione = new FormGroup({
      nome: new FormControl("", Validators.required),
      cognome: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
      confermaPassword: new FormControl("", compareValidation("password")),
      citta: new FormControl("", Validators.required),
      cap: new FormControl("", [Validators.required]),
      via: new FormControl("", Validators.required),
      nCivico: new FormControl("", Validators.required),
    });
  }

  get getNome() {
    return this.registrazione.get("nome");
  }
  get getCognome() {
    return this.registrazione.get("cognome");
  }
  get getUsername() {
    return this.registrazione.get("username");
  }
  get getEmail() {
    return this.registrazione.get("email");
  }
  get getPassword() {
    return this.registrazione.get("password");
  }
  get getConfermaPassword() {
    return this.registrazione.get("confermaPassword");
  }
  get getCitta() {
    return this.registrazione.get("citta");
  }
  get getCap() {
    return this.registrazione.get("cap");
  }
  get getVia() {
    return this.registrazione.get("via");
  }
  get getNCivico() {
    return this.registrazione.get("nCivico");
  }

  creaUser() {
    this.regUserData.setDati(
      this.registrazione.controls.username.value,
      this.registrazione.controls.email.value,
      this.registrazione.controls.password.value,
      this.registrazione.controls.nome.value,
      this.registrazione.controls.cognome.value,
      this.registrazione.controls.via.value,
      this.registrazione.controls.nCivico.value,
      this.registrazione.controls.citta.value,
      this.registrazione.controls.cap.value,
      0
    );
  }

  campoVuoto(campo: FormControl) {
    if (
      ((campo.dirty || campo.touched) && campo.value === null) ||
      campo.value === "" ||
      campo.value.lenght === 0
    )
      return true;
    else return false;
  }

  onSubmit() {
    console.log(this.checkEmail("dario.demarco1208@gmail.com"));
    this.submitted = true;
    this.creaUser();
    this.registraUser();
    //console.log(this.regUserData);
  }

  registraUser() {
    if (this.submitted == false) return;

    this.registrazione.reset();

    this.registrazioneService.registra(this.regUserData).subscribe(
      (res) => {
        if (res == null) {
          Swal.fire({
            type: "error",
            title: "Registrazione non avvenuta",
            text: "riprova più tardi.",
          });
        } else {
          this.loginService.setHomepage(true);
          Swal.fire({
            type: "success",
            title: "Sei registrato!",
            timer: 1500,
          });
          this.route.navigateByUrl("/login");
        }
      },
      (err) => console.log(err)
    );
  }

  checkEmail(email: string) {
    this.registrazioneService.checkEmail(email).subscribe((email) => {
      this.esisteEmail = email;
    });
  }

  checkUsername(username: string) {
    this.registrazioneService.checkUsername(username).subscribe((username) => {
      this.esisteUsername = username;
    });
  }
}
