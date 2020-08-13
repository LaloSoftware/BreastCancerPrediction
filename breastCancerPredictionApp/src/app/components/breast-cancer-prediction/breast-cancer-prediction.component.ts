import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ModeloDeDatos } from '../../models/modeloDeDatos'

@Component({
  selector: 'app-breast-cancer-prediction',
  templateUrl: './breast-cancer-prediction.component.html',
  styleUrls: ['./breast-cancer-prediction.component.css']
})
export class BreastCancerPredictionComponent implements OnInit {
  modelo: ModeloDeDatos = new ModeloDeDatos();
  datos: FormGroup

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.datos = this._formBuilder.group({
      "radio": [this.modelo.radio, [Validators.required, Validators.min(0.0001)]],
      "textura": [this.modelo.textura, [Validators.required, Validators.min(0.0001)]],
      "perimetro": [this.modelo.perimetro, [Validators.required, Validators.min(0.0001)]],
      "area": [this.modelo.area, [Validators.required, Validators.min(0.0001)]],
      "suavidad": [this.modelo.suavidad, [Validators.required, Validators.min(0.0001)]],
      "compacidad": [this.modelo.compacidad, [Validators.required, Validators.min(0.0001)]],
      "concavidad": [this.modelo.concavidad, [Validators.required, Validators.min(0.0001)]],
      "puntos_concavos": [this.modelo.puntos_concavos, [Validators.required, Validators.min(0.0001)]],
      "simetria": [this.modelo.simetria, [Validators.required, Validators.min(0.0001)]],
      "dimension_fractal": [this.modelo.dimension_fractal, [Validators.required, Validators.min(0.0001)]],
      "radio_se": [this.modelo.radio_se, [Validators.required, Validators.min(0.0001)]],
      "textura_se": [this.modelo.textura_se, [Validators.required, Validators.min(0.0001)]],
      "perimetro_se": [this.modelo.perimetro_se, [Validators.required, Validators.min(0.0001)]],
      "area_se": [this.modelo.area_se, [Validators.required, Validators.min(0.0001)]],
      "suavidad_se": [this.modelo.suavidad_se, [Validators.required, Validators.min(0.0001)]],
      "compacidad_se": [this.modelo.compacidad_se, [Validators.required, Validators.min(0.0001)]],
      "concavidad_se": [this.modelo.concavidad_se, [Validators.required, Validators.min(0.0001)]],
      "puntos_concavos_se": [this.modelo.puntos_concavos_se, [Validators.required, Validators.min(0.0001)]],
      "simetria_se": [this.modelo.simetria_se, [Validators.required, Validators.min(0.0001)]],
      "dimension_fractal_se": [this.modelo.dimension_fractal_se, [Validators.required, Validators.min(0.0001)]],
      "peor_radio": [this.modelo.peor_radio, [Validators.required, Validators.min(0.0001)]],
      "peor_textura": [this.modelo.peor_textura, [Validators.required, Validators.min(0.0001)]],
      "peor_perimetro": [this.modelo.peor_perimetro, [Validators.required, Validators.min(0.0001)]],
      "peor_area": [this.modelo.peor_area, [Validators.required, Validators.min(0.0001)]],
      "peor_suavidad": [this.modelo.peor_suavidad, [Validators.required, Validators.min(0.0001)]],
      "peor_compacidad": [this.modelo.peor_compacidad, [Validators.required, Validators.min(0.0001)]],
      "peor_concavidad": [this.modelo.peor_concavidad, [Validators.required, Validators.min(0.0001)]],
      "peores_puntos_concavos": [this.modelo.peores_puntos_concavos, [Validators.required, Validators.min(0.0001)]],
      "peor_simetria": [this.modelo.peor_simetria, [Validators.required, Validators.min(0.0001)]],
      "peor_dimension_fractal": [this.modelo.peor_dimension_fractal, [Validators.required, Validators.min(0.0001)]]
    })
  }

}
