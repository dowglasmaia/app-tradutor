import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase.'
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  public numTentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    console.log(`Componente Painel foi destruido!`)

  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);

      //
      if (this.rodada == 4) {
        this.encerrarJogo.emit(`Vitória`);
      } else {
        this.atualizaRodada();
      }

    } else {
      //diminuir o valor das tentativas
      this.numTentativas--;
      if (this.numTentativas < 0) {
        this.encerrarJogo.emit(`Derrota`);
      }
    }
  }

  private atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
