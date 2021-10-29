import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history:string[];

  constructor() {
    this.history = []
  }

  postHistory(val:string){
    this.history.push(val)
  }

  getHistory(): string[]{
    return this.history
  }
}
