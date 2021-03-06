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
  imageShow:boolean;
  abstractShow:boolean;
  categoriesShow:boolean;
  min_confidence:number;
  text:string;
  showResult:boolean;

  results:IEntityExtraction[];

  constructor(private service:DandelionService) {
    this.image = false;
    this.abstract = false;
    this.categories = false;
    this.imageShow = false;
    this.abstractShow = false;
    this.categoriesShow = false;
    this.min_confidence = 0.0;
    this.text = ''
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
        this.imageShow = this.image
        this.abstractShow = this.abstract
        this.categoriesShow = this.categories
        this.showResult = true
      }
    )
  }

}
