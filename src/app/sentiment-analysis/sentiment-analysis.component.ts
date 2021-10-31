import {Component, OnInit, TemplateRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DandelionService} from "../service/dandelion.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  result:number;
  text:string;
  name:string;

  constructor(private dialog: MatDialog,private service:DandelionService) {
    this.result = -0.9
    this.text = ""
    this.name = "Menu"
  }

  ngOnInit(): void {
  }

  setName(val:string): void {
    this.name = val
  }

  openDialog(tempRef: TemplateRef<any>): void{
    this.dialog.open(tempRef, {height: '175px', width: '200px'});
  }

  submit(tempRef: TemplateRef<any>):void {
    if(this.name == "Menu"){
      return
    }
    this.service.getSentimentalAnalysis(this.text,this.name).subscribe(result => {
        this.result = Number.parseFloat((Math.round(result.score * 100) / 100).toFixed(2));
        this.openDialog(tempRef)
    })
  }
}
