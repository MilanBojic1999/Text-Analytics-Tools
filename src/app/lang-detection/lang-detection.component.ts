import {Component, OnInit} from '@angular/core';
import {DandelionService} from "../service/dandelion.service";
import {ILanguageDetection} from "../models/model";

@Component({
  selector: 'app-lang-detection',
  templateUrl: './lang-detection.component.html',
  styleUrls: ['./lang-detection.component.css']
})
export class LangDetectionComponent implements OnInit {

  text:string;
  clean:boolean;
  result:ILanguageDetection[];

  showResult:boolean

  constructor(private service:DandelionService) {
    this.text = ""
    this.clean = false
    this.result = []
    this.showResult = false
  }

  ngOnInit(): void {
  }

  ceil(num:number): number {
    return  Math.floor(num)
  }

  submit(): void{
    this.service.getLangDetection(this.text,this.clean).subscribe(res => {
      this.result = res
      this.showResult = true

    })

  }

}
