import {Component, OnInit, TemplateRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  result:number;

  constructor(private dialog: MatDialog) {
    this.result = -0.9
  }

  ngOnInit(): void {
  }


  openDialog(tempRef: TemplateRef<any>): void{
    this.dialog.open(tempRef, {height: '175px', width: '200px'});
  }
}
