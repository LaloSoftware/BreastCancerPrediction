import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreastCancerPredictionComponent } from './components/breast-cancer-prediction/breast-cancer-prediction.component';
import { FuncionamientoComponent } from './components/funcionamiento/funcionamiento.component';


const routes: Routes = [
  { path:"cancer_de_mama", component: BreastCancerPredictionComponent },
  { path:"preguntas_frecuentes", component: FuncionamientoComponent },
  { path: "**", pathMatch: "full", redirectTo: "cancer_de_mama" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
