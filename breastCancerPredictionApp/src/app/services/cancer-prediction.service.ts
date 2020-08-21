import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CancerPredictionService {

  constructor(private _http: HttpClient) { }

  public predecir(datos: number[]) {
    let data = {
      "datos": datos
    }
    return this._http.post("localhost:4000/breast_cancer_prediction", data);
  }
}
