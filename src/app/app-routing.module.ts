import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from "./home-component/home-component.component";
import {EntityExtractionComponent} from "./entity-extraction/entity-extraction.component";
import {LangDetectionComponent} from "./lang-detection/lang-detection.component";
import {SentimentAnalysisComponent} from "./sentiment-analysis/sentiment-analysis.component";
import {TextSimilarityComponent} from "./text-similarity/text-similarity.component";
import {HistoryComponent} from "./history/history.component";
import {TokenGuardGuard} from "./token-guard.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponentComponent
  },
  {
    path: "entityext",
    component: EntityExtractionComponent,
    canActivate: [TokenGuardGuard]
  },
  {
    path: "langdetect",
    component: LangDetectionComponent,
    canActivate: [TokenGuardGuard]
  },
  {
    path: "sentiment",
    component: SentimentAnalysisComponent,
    canActivate: [TokenGuardGuard]
  },
  {
    path: "similarity",
    component: TextSimilarityComponent,
    canActivate: [TokenGuardGuard]
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
