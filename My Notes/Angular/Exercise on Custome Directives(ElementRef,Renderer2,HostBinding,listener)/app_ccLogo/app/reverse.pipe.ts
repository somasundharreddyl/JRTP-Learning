import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: any): string {
    //Need to return reverse of string
    return Array.from(value).reverse().join("");
    //hello ==> olleh

   // ['h','e','l','l','o']=>['0','l','l','e','h'] ==> olleh
  }

}
