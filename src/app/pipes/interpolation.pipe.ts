import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interpolation'
})
export class InterpolationPipe implements PipeTransform {

  transform(value: number,min:number = 0, max:number = 1): string {
    const red = 210 * (1-(value-min)/(max-min));
    const green = 225 * (value-min)/(max-min);
    const blue = 30;
    console.log(`rgb(${red},${green},${blue})`)
    return `rgb(${red},${green},${blue})`;
  }

}
