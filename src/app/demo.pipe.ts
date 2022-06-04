import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: number,extension : string =" ans"): unknown {
    return  value + extension;
  }

}
