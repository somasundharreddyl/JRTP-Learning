import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {

    let currentYear:any=new Date().getFullYear(); //Current Year

    let inputYear:any=new Date(value).getFullYear(); //Dob Year

    return currentYear-inputYear; //This will give Age


  }

}
