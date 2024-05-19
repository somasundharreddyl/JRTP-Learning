import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {



  //String Interpolation

  userName:string="";
  firstName:string="";
  lastName:string="";
  email:string="";

  dateString:string="";
  controlFlag:boolean=false;
   classStatus:string="";
   guestName:string="Vijay";

  constructor(){

    this.userName="ashokit";
    this.firstName="Ashok";
    this.lastName="Kumar New";
    this.email="ashok.it@gmail.com";

  
    //toDateString ==> Date
    //toLocaleTimeString ==> Time

    setInterval (  () => {

      let currentDate=new Date();

    this.dateString=currentDate.toDateString() + " " + currentDate.toLocaleTimeString();

    this.controlFlag= Math.random() > 0.5 ? true : false;

    /*

      if(Math.random()>0.5)
           true

      else

          false
    */

      
      } , 1000 )
  }




  getUserName():string{
    return this.userName;
  }

  getFirstName():string{
    return this.firstName;
  }

  getLastName():string{
    return this.lastName;
  }

  getEmail():string{
    return this.email;
  }


  getDateString():string{
    return this.dateString;
  }


  updateCourse(courseName:string){
    this.classStatus=courseName +  "   " + "Class is Started";
  }
}
