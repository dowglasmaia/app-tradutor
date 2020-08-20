import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase.'
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {

  }

  public atualizarResposta(resposta: Event): void {
    console.log(resposta)
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert("Tradução correta")

      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);

      this.atualizaRodada();

    } else {
      alert("Tradução Errada")
    }
  }

  private atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
