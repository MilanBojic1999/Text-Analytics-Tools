import { Component, OnInit } from '@angular/core';
import {DandelionService} from "../service/dandelion.service";
import {IEntityExtraction} from "../models/model";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  image:boolean;
  abstract:boolean;
  categories:boolean;
  min_confidence:number;
  text:string;
  showResult:boolean;

  results:IEntityExtraction[];

  constructor(private service:DandelionService) {
    this.image = false;
    this.abstract = false;
    this.categories = false;
    this.min_confidence = 0.0;
    this.text = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. '
    this.results = [];
    this.showResult = false
  }

  ngOnInit(): void {
    this.showResult = false
    console.log("Init bamee")
  }

  prnt(): void {
    console.log("sss")
  }

  showResultGet(){
    return this.showResult? 'block':'none'
  }

  formatLabel(value: number) {
    return Math.floor(value*100).toString() + '%'
  }

  submitAction(): void {
    if(this.text.length == 0)
      return
    this.service.getEntityExtraction(this.text,this.min_confidence,this.image,this.abstract,this.categories).subscribe(
      max_result => {
        this.results = max_result
        console.log(this.results)
        this.showResult = true
      }
    )
  }

}
