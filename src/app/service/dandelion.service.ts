import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HistoryService} from "./history.service";
import {
  IEEReturn,
  IEntityExtraction,
  ILanguageDetection,
  ILDReturn,
  ISentiment,
  ISReturn,
  ITSReturn
} from "../models/model";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly apiUrl = environment.postApi;

  constructor(private httpClient:HttpClient,private historyService:HistoryService) {
    console.log("Dandalion line is connecting...")
  }

  getEntityExtraction(text:string,min_conf:number,image:boolean,abstract:boolean,categories:boolean): Observable<IEntityExtraction[]> {
    let include = '' + (image? ',image': '') + (abstract? ',abstract':'') + (categories? ',categories':'');
    include = include.substring(1);
    console.log("EE log|",include)
    let api_call = `${this.apiUrl}/nex/v1/?lang=en&text=${text}&min_confidence=${min_conf}&include=${include}&token=${localStorage.getItem("dtoken")}`;
    this.historyService.postHistory(api_call,'get');
    return this.httpClient.get<IEEReturn>(api_call).pipe(map(resp => {
      return resp.annotations;
    }));
  }

  getTextSimilarity(text1:string,text2:string): Observable<number> {
    let api_call = `${this.apiUrl}/sim/v1/?text1=${text1}&text2=${text2}&token=${localStorage.getItem("dtoken")}`
    this.historyService.postHistory(api_call,'get')
    return this.httpClient.get<ITSReturn>(api_call).pipe(map(res => {
      return res.similarity;
    }))
  }

  getLangDetection(text:string,clean:boolean): Observable<ILanguageDetection[]> {
    let api_call = `${this.apiUrl}/li/v1/?text=${text}&clean=${clean}&token=${localStorage.getItem("dtoken")}`
    this.historyService.postHistory(api_call,'get')
    return this.httpClient.get<ILDReturn>(api_call).pipe(map(resp =>{
      return resp.detectedLangs;
    }))
  }

  getSentimentalAnalysis(text:string,lang:string): Observable<ISentiment>{
    let api_call = `${this.apiUrl}/sent/v1/?text=${text}&lang=${lang}&token=${localStorage.getItem("dtoken")}`
    this.historyService.postHistory(api_call,'get')
    return this.httpClient.get<ISReturn>(api_call).pipe(map(res => {return res.sentiment}))
  }

  checkTokenValidity(token:string): Observable<boolean> {

    let text = "ssss"
    let api_call = `${this.apiUrl}/li/v1/?text=${text}&token=${token}`

    return this.httpClient.get(api_call,{observe:'response'}).pipe(map(response => {
      catchError(() => {return of(false)})
      return response.status == 200;
    }))

  }

}
//https://api.dandelion.eu/datatxt/nex/v1/?text=The%20doctor%20says%20an%20apple%20is%20better%20than%20an%20orange&lang=en&include=types%2Cabstract%2Ccategories%2Clod&token=<YOUR_TOKEN>
