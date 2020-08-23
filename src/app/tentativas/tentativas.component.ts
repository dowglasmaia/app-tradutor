import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

   public coracoes: Coracao[]= [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  @Input() public tentativas: number;

  constructor() {
    //console.log("Tentativas recebidas do Painel: "+this.tentativas)
   }

  ngOnInit(): void {
    console.log(this.coracoes)

    console.log("Tentativas recebidas do Painel: "+this.tentativas)
  }

}
