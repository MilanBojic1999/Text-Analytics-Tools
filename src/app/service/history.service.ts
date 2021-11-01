import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history:string[];

  constructor() {
    this.history = []
    console.log("History is starting...")
  }

  postHistory(val:string,type:string){
    let time = new Date()
    let pp = `[${time.toLocaleString()}] ${type.toUpperCase()} ${val}`
    console.log(pp)
    this.history.push(pp)
  }

  getHistory(): string[]{
    return this.history
  }
}
