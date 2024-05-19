import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-defaultpipe',
  standalone: true,
  imports: [CommonModule,ReversePipe],
  templateUrl: './defaultpipe.component.html',
  styleUrl: './defaultpipe.component.css'
})
export class DefaultpipeComponent {

  var_one:string="angular";
  var_two:string="REACT JS";
  var_three:string="node js";
  var_four:number=100.12345;
  var_five:number=100;
  var_six:Date=new Date();
  var_eight:any={num:10};
  class_status:any;

constructor(){

  this.class_status=new Promise(
    (resolve,reject)=>{
        resolve("We have class on Tuesday No Holiday for Ugadi")
    }

  )

}

}
