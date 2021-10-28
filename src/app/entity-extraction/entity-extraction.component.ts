import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.image = false;
    this.abstract = false;
    this.categories = false;
    this.min_confidence = 0.0;
  }

  ngOnInit(): void {
  }

  prnt(): void {
    console.log("sss")
  }

  formatLabel(value: number) {
    return Math.floor(value*100).toString() + '%'
  }

}
