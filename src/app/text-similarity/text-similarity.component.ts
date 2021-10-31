import {Component, OnInit, TemplateRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DandelionService} from "../service/dandelion.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {



  text1:string;
  text2:string;
  result:number

  constructor(private dialog: MatDialog,private service:DandelionService) {
    this.text1 = this.text2 = '';
    this.result = 0.1;

  }

  ngOnInit(): void {
  }

  openDialog(tempRef: TemplateRef<any>): void{
    this.dialog.open(tempRef, {height: '175px', width: '200px'});
  }

  submit(tempRef: TemplateRef<any>): void{
    if(this.text2.length == 0 || this.text1.length == 0)
      return
    this.service.getTextSimilarity(this.text1,this.text2).subscribe(res => {
      this.result = Number.parseFloat((Math.round(res * 100) / 100).toFixed(2));
      console.log(res)
      this.openDialog(tempRef)
    })
  }

}
