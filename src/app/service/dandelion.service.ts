import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEntityExtraction, ILanguageDetection, ISentiment} from "../models/model";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient:HttpClient,private historyService:HistoryService) { }

  getEntityExtraction(text:string,min_conf:number,image:boolean,abstract:boolean,categories:boolean): Observable<IEntityExtraction[]> {
    let include = '' + image? ',image': '' + abstract? ',abstract':'' + categories? ',categories':''
    include = include.substring(1)

    let api_call = `${this.apiUrl}/nex/v1/?lang=en/&text=${text}&min_confidence=${min_conf}&include=${include}&token=${localStorage.getItem("dtoken")}`
    return this.httpClient.get<IEntityExtraction[]>(api_call)
  }

  getTextSimilarity(text1:string,text2:string): Observable<number> {
    let api_call = `${this.apiUrl}/sim/v1/?text1=${text1}&?text2=${text2}&token=${localStorage.getItem("dtoken")}`
    return this.httpClient.get<number>(api_call)
  }

  getLangDetection(text:string,clean:boolean): Observable<ILanguageDetection> {
    let api_call = `${this.apiUrl}/li/v1/?text=${text}&clean=${clean}&token=${localStorage.getItem("dtoken")}`
    return this.httpClient.get<ILanguageDetection>(api_call)
  }

  getSentimentalAnalysis(text:string,lang:string): Observable<ISentiment>{
    let api_call = `${this.apiUrl}/sent/v1/?text=${text}&$lang=${lang}&token=${localStorage.getItem("dtoken")}`
    return this.httpClient.get<ISentiment>(api_call)
  }

}
//https://api.dandelion.eu/datatxt/nex/v1/?text=The%20doctor%20says%20an%20apple%20is%20better%20than%20an%20orange&lang=en&include=types%2Cabstract%2Ccategories%2Clod&token=<YOUR_TOKEN>
