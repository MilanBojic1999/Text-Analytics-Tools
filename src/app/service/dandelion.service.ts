import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEntityExtraction} from "../models/model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient:HttpClient) { }

  getEntityExtraction(text:string,min_conf:number,image:boolean,abstract:boolean,categories:boolean): Observable<IEntityExtraction> {
    let include = '' + image? ',image': '' + abstract? ',abstract':'' + categories? ',categories':''
    include = include.substring(1)

    return this.httpClient.get<IEntityExtraction>(`${this.apiUrl}/nex/v1/?lang=en/&text=${text}&min_confidence=${min_conf}&include=${include}&token=${localStorage.getItem("dtoken")}`)

  }

}
//https://api.dandelion.eu/datatxt/nex/v1/?text=The%20doctor%20says%20an%20apple%20is%20better%20than%20an%20orange&lang=en&include=types%2Cabstract%2Ccategories%2Clod&token=<YOUR_TOKEN>
