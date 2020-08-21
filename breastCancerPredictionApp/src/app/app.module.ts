import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

//services
import { CancerPredictionService } from './services/cancer-prediction.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BreastCancerPredictionComponent } from './components/breast-cancer-prediction/breast-cancer-prediction.component';
import { FuncionamientoComponent } from './components/funcionamiento/funcionamiento.component'

@NgModule({
  declarations: [
    AppComponent,
    BreastCancerPredictionComponent,
    FuncionamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CancerPredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
