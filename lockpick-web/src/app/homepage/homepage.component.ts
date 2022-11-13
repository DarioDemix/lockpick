import { Component, OnInit } from '@angular/core';

export interface Filtro {
  nome: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}
