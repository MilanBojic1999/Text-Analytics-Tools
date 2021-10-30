import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from "./home-component/home-component.component";
import {EntityExtractionComponent} from "./entity-extraction/entity-extraction.component";
import {LangDetectionComponent} from "./lang-detection/lang-detection.component";
import {SentimentAnalysisComponent} from "./sentiment-analysis/sentiment-analysis.component";
import {TextSimilarityComponent} from "./text-similarity/text-similarity.component";
import {HistoryComponent} from "./history/history.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponentComponent
  },
  {
    path: "entityext",
    component: EntityExtractionComponent
  },
  {
    path: "langdetect",
    component: LangDetectionComponent
  },
  {
    path: "sentiment",
    component: SentimentAnalysisComponent
  },
  {
    path: "similarity",
    component: TextSimilarityComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
