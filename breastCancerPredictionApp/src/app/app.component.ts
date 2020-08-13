import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'breastCancerPredictionApp';
  encabezado = "Predicción de cancer de mama";

  cambiarTitulo(titulo: string): void{
    this.encabezado = titulo;
  }
}
