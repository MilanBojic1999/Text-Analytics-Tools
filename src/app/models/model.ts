
export interface IEEReturn {
  annotations:IEntityExtraction[];
}

export interface IImage {
  full:string;
  thumbnail:string;
}

export interface IEntityExtraction {
  id:number;
  title:string;
  start:number;
  categories:string[];
  abstract:string;
  label:string;
  types:string[];
  confidence:number;
  uri:string;
  end:number;
  spot:string;
  image:IImage;
}

export interface ILanguageDetection {
  lang:string;
  confidence:number;
}

export interface ILDReturn {
  detectedLangs:ILanguageDetection[];
}

export interface ISReturn {
  sentiment:ISentiment;
}

export interface ISentiment {
  score:number;
  type:string;
}

export interface ITSReturn {
  similarity:number;
}
