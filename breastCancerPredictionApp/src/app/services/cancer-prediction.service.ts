import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CancerPredictionService {

  constructor(private _http: HttpClient) { }

  public predecir(datos: []) {
    console.log(datos);
    return "prediccion";
  }
}
