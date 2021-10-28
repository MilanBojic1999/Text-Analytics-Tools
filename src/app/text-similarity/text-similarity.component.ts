import {Component, OnInit, TemplateRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {



  text1:string;
  text2:string;
  result:number
  constructor(private dialog: MatDialog) {
    this.text1 = this.text2 = '';
    this.result = 0.1;

  }

  ngOnInit(): void {
  }

  openDialog(tempRef: TemplateRef<any>): void{
    this.dialog.open(tempRef, {height: '175px', width: '200px'});
  }

}
