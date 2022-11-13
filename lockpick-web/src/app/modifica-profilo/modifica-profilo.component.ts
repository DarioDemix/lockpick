import { Component, OnInit } from "@angular/core";
import { User } from "../model/User";

@Component({
  selector: "app-modifica-profilo",
  templateUrl: "./modifica-profilo.component.html",
  styleUrls: ["./modifica-profilo.component.css"],
})
export class ModificaProfiloComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  user: User;

  onSubmit(): void {
    console.log(this.user.toString());
  }
}
