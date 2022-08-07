import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'rub'
})
export class RoublesPipe implements PipeTransform {
  transform(value: number | undefined, args?: any): string {
    return value ? value.toString() + ' руб.' : '';
  }
}