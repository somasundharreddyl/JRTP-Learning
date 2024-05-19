import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emp-count',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-count.component.html',
  styleUrl: './emp-count.component.css'
})
export class EmpCountComponent {



  @Input()
  all:number=20;

  @Input()
  male:number=10;


  @Input()
  female:number=10; //All ( allnumber)    male (malenumber)   female (femalenumber)


  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();


  selectedRadioButtonValue:string='All';


  onRadioButtonChange(){
    //The following Event Emitter will emit the event during radio change
    //When ever radio button is clicked it will emit the event to the details component
   // console.log("You Clicked the Radio Button with Option ==> " + this.selectedRadioButtonValue);
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

}
