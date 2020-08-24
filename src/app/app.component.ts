import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;

  public messageFimDeJogo: string;
  public subMessageFimDeJogo: string;
  public urlImgFimDeJogo: string;
  public classTextMsg: string;

  /**controlado pelo componente Painel */
  public fimDeJogo(tipo: string) {
    this.jogoEmAndamento = false;    

    if (tipo === 'derrota') {
      this.classTextMsg = 'danger';
      this.messageFimDeJogo = 'Fim de Jogo!!!';
      this.subMessageFimDeJogo = 'Você Perdeu.';
      this.urlImgFimDeJogo = 'assets/img/minions_PNG61.png';
    }
    else if (tipo === 'vitoria') {
      this.classTextMsg = 'success';
      this.messageFimDeJogo = 'Fim de Jogo!!!';
      this.subMessageFimDeJogo = 'Parabens Você Ganhou.';
      this.urlImgFimDeJogo = 'assets/img/minions_PNG78.png';
    }

  }



}
