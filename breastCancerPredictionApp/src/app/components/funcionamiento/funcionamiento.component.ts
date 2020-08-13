import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionamiento',
  templateUrl: './funcionamiento.component.html',
  styleUrls: ['./funcionamiento.component.css']
})
export class FuncionamientoComponent implements OnInit {
  panelOpenState = false;
  preguntas = [
    {
      pregunta: "¿Pregunta 1?",
      respuesta: "respuesta 1"
    },
    {
      pregunta: "¿Pregunta 2?",
      respuesta: "respuesta 2"
    },
    {
      pregunta: "¿Pregunta 3?",
      respuesta: "respuesta 3"
    },
    {
      pregunta: "¿Pregunta 4?",
      respuesta: "respuesta 4"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
