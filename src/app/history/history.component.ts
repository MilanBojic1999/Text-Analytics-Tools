import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../service/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history:string[];

  constructor(private service:HistoryService) {
    this.history = []
  }


  ngOnInit(): void {
    this.history = this.service.getHistory()
  }

}
