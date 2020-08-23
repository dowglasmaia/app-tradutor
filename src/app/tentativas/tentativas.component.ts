import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  @Input() public tentativas: number;

  constructor() {
    
  }

  /** É executado depois do construtor e antes do  ngOnInit com os valores do  @Input() atualizados*/
  ngOnChanges(): void {

    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas;
     
      console.log(`indice -1 == ${indice - 1}`)
      console.log(`Coração na posisão do indice é == ${ this.coracoes[indice -1].cheio }`)
     
      this.coracoes[indice -1].cheio = false;
      
      console.log(`Coração na posisão do indice agora é == ${ this.coracoes[indice -1].cheio }`)
    }

    console.log("Tentativas recebidas do Painel com  ngOnChanges: " + this.tentativas)

  }

  ngOnInit(): void {
   
  }

}
