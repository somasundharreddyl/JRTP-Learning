import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-visitingcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitingcard.component.html',
  styleUrl: './visitingcard.component.css'
})
export class VisitingcardComponent {


  //We will declare a JSON OBJECT Here
  

  users:any[]=[];
 //@Input('name') userName:string="";
 @Input('inputObj') userObj:User=new User;

  //Here we are creating a new data structure with name users of any type which contains array of elements
  //initilized with empty array


  //IN JSON Object to retrieve a value ==> JSON.Key ==Value

  //In Real time we will make a back end call and back end will retrieve this data from database table
  // and displays the result.

  constructor(){
   
  }


  ngOnInit(){

    this.users=[

      //JSON1
      {

        //username:'VijayKumar',
        //username:this.userName,
        username:this.userObj.username,
        title:this.userObj.title,
        salary:this.userObj.salary,
        department:this.userObj.department,
        address:this.userObj.address,
        
        phones:this.userObj.phones

      },

       //JSON2
      {
        username:'Sadhya Rani',
        title:'Software Lead',
        salary:'1000000',
        department:1,
        address:[
                    '2-2-222',
                    'Gachibowli',
                    'Hyderabad'
               ],
        
        phones:[
                '333-333-3333',
                '444-444-4444'

              ]

      }

      //JSON3


      //JSON4

    ]
  }



}
