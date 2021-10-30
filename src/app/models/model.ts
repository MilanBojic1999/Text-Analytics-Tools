export interface IEntityExtraction {
  id:number;
  title:string;
  start:number;
  categories:string[];
  label:string;
  types:string[];
  confidence:number;
  uri:string;
  end:number;
  spot:string;
}

export interface ILanguageDetection {
  lang:string;
  confidence:number;
}

export interface ISentiment {
  score:number;
  type:string;
}
