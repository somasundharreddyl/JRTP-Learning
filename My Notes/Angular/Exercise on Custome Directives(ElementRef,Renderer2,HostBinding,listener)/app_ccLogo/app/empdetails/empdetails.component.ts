import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgePipe } from '../age.pipe';
import { Title } from '@angular/platform-browser';
import { TitlePipe } from '../title.pipe';
import { EmpCountComponent } from '../emp-count/emp-count.component';

@Component({
  selector: 'app-empdetails',
  standalone: true,
  imports: [CommonModule,AgePipe,TitlePipe,EmpCountComponent],
  templateUrl: './empdetails.component.html',
  styleUrl: './empdetails.component.css'
})
export class EmpdetailsComponent {


  employees:any[]=[];

  radioButtonValue:string='All';

  constructor(){

this.employees=[

{empid:'101',empname:'Pragati',gender:'Female',title:'Software Developer',salary:'100000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'102',empname:'Akash',gender:'Male',title:'Sr Software Developer',salary:'120000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'103',empname:'Jhansi',gender:'Female',title:'Software Lead',salary:'150000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'104',empname:'Hemanth',gender:'Male',title:'Software Manager',salary:'200000',department:'4',address:'Delhi',dob:'04/04/1980'},

{empid:'105',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'110000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'106',empname:'Farooq',gender:'Male',title:'Sr Software Developer',salary:'130000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'107',empname:'Priyanka',gender:'Female',title:'Software Lead',salary:'160000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'108',empname:'Rakesh',gender:'Male',title:'Software Manager',salary:'210000',department:'4',address:'Delhi',dob:'04/04/1980'},


{empid:'109',empname:'Sandhya',gender:'Female',title:'Software Developer',salary:'120000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'110',empname:'Sankar',gender:'Male',title:'Sr Software Developer',salary:'140000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'111',empname:'Soumya',gender:'Female',title:'Software Lead',salary:'170000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'112',empname:'Sathya',gender:'Male',title:'Software Manager',salary:'220000',department:'4',address:'Delhi',dob:'04/04/1980'},


{empid:'112',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'130000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
{empid:'114',empname:'Vivek',gender:'Male',title:'Sr Software Developer',salary:'150000',department:'2',address:'Chennai',dob:'02/02/1991'},
{empid:'115',empname:'Komal',gender:'Female',title:'Software Lead',salary:'180000',department:'3',address:'Banglore',dob:'03/03/1989'},
{empid:'116',empname:'Varun',gender:'Male',title:'Software Manager',salary:'230000',department:'4',address:'Delhi',dob:'04/04/1980'}


]


  }


  getLatestData(){


    this.employees=[

      {empid:'101',empname:'Pragati',gender:'Female',title:'Software Developer',salary:'100000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
      {empid:'102',empname:'Akash',gender:'Male',title:'Sr Software Developer',salary:'120000',department:'2',address:'Chennai',dob:'02/02/1991'},
      {empid:'103',empname:'Jhansi',gender:'Female',title:'Software Lead',salary:'150000',department:'3',address:'Banglore',dob:'03/03/1989'},
      {empid:'104',empname:'Hemanth',gender:'Male',title:'Software Manager',salary:'200000',department:'4',address:'Delhi',dob:'04/04/1980'},
      
      {empid:'105',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'110000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
      {empid:'106',empname:'Farooq',gender:'Male',title:'Sr Software Developer',salary:'130000',department:'2',address:'Chennai',dob:'02/02/1991'},
      {empid:'107',empname:'Priyanka',gender:'Female',title:'Software Lead',salary:'160000',department:'3',address:'Banglore',dob:'03/03/1989'},
      {empid:'108',empname:'Rakesh',gender:'Male',title:'Software Manager',salary:'210000',department:'4',address:'Delhi',dob:'04/04/1980'},
      
      
      {empid:'109',empname:'Sandhya',gender:'Female',title:'Software Developer',salary:'180000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
      {empid:'110',empname:'Sankar',gender:'Male',title:'Sr Software Developer',salary:'140000',department:'2',address:'Chennai',dob:'02/02/1991'},
      {empid:'111',empname:'Soumya',gender:'Female',title:'Software Lead',salary:'170000',department:'3',address:'Banglore',dob:'03/03/1989'},
      {empid:'112',empname:'Sathya',gender:'Male',title:'Software Manager',salary:'220000',department:'4',address:'Delhi',dob:'04/04/1980'},
      
      
      {empid:'112',empname:'Manisha',gender:'Female',title:'Software Developer',salary:'130000',department:'1',address:'Hyderabad',dob:'01/01/1990'},
      {empid:'114',empname:'Vivek',gender:'Male',title:'Sr Software Developer',salary:'150000',department:'2',address:'Chennai',dob:'02/02/1991'},
      {empid:'115',empname:'Komal',gender:'Female',title:'Software Lead',salary:'180000',department:'3',address:'Banglore',dob:'03/03/1989'},
      {empid:'116',empname:'Varun',gender:'Male',title:'Software Manager',salary:'230000',department:'4',address:'Delhi',dob:'04/04/1980'},
     
     
     
      {empid:'117',empname:'Vanaja',gender:'Female',title:'Software Lead',salary:'180000',department:'3',address:'Banglore',dob:'03/03/1989'},
      {empid:'118',empname:'Aravind',gender:'Male',title:'Software Manager',salary:'230000',department:'4',address:'Delhi',dob:'04/04/1980'}
      
      
      ]
      

  }

  trackByEmpCode(index:number,employee:any){
    return employee.code;
  }


  getTotalEmployeesCount():number{
    return this.employees.length; //This will give total  Employee Count
  }

  getMaleEmployeeCount():number{
    return this.employees.filter( e=> e.gender=='Male').length; //This will give Male Count
  }

  getFemaleEmployeeCount():number{
    return this.employees.filter( e=> e.gender=='Female').length; //This will give Female Count
  }

  onRadioChange(selectedRadioButtonValue:string){
    console.log("Count Component Emitted the value to the Details Component " + selectedRadioButtonValue);
    this.radioButtonValue=selectedRadioButtonValue;
  }
}
