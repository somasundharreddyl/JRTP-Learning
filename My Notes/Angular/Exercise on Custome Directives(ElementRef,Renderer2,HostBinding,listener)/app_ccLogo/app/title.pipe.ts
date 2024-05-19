import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true
})
export class TitlePipe implements PipeTransform {

  transform(title: string, gender:string): string {
    
    if(gender.toLocaleLowerCase()=="male")
      return "Mr. " + title;
    else 
      return "Mrs. " + title;
    


    /*


    We need to get two values 1) Gender 2) Title

    if(gender=female){
      title = Mrs. + title
      elese
      title =Mr + title
    }

    */
  }

}
