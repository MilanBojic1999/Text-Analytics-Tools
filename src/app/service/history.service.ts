import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history:string[];

  constructor() {
    this.history = []
  }

  postHistory(val:string,type:string){
    let time = new Date()
    let pp = `[${time.toLocaleTimeString()}] ${type.toUpperCase()} ${val}`
    this.history.push(pp)
  }

  getHistory(): string[]{
    return this.history
  }
}
