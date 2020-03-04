import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitBy'
})
export class SpliterPipe implements PipeTransform {

  transform(value: string, spliter: string = ','): string {
    let values = value.split(spliter);
    let res = "";
    values.forEach(val => {
      res += val.trim() + " ";
    });
    return res;
  }

}
