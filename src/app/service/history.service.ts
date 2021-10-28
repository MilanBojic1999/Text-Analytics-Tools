import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history:String[];

  constructor() {
    this.history = []
  }

  postHistory(val:string){
    this.history.push(val)
  }

  getHistory(): String[]{
    return this.history
  }
}
