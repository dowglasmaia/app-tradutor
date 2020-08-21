import { Coracao } from './../shared/coracao.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracoes: Coracao[]= [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.coracoes)
  }

}
