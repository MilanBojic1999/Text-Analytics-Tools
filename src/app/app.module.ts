import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { LangDetectionComponent } from './lang-detection/lang-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TokenInputComponent } from './token-input/token-input.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {MatMenuModule} from "@angular/material/menu";
import { InterpolationPipe } from './pipes/interpolation.pipe';
import { HistoryComponent } from './history/history.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LangDetectionComponent,
    SentimentAnalysisComponent,
    HomeComponentComponent,
    TokenInputComponent,
    InterpolationPipe,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  exports: [ MatFormFieldModule, MatInputModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
