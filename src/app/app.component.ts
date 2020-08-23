import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**controlado pelo componente Painel */
  public fimDeJogo(tipo: string) {
    console.log(tipo)
  }

}
