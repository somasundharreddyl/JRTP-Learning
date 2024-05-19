import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { VisitingcardComponent } from './visitingcard/visitingcard.component';
import { User } from './user';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { DefaultpipeComponent } from './defaultpipe/defaultpipe.component';
import { BasichighlightDirective } from './basichighlight.directive';
import { RendererDirective } from './renderer.directive';
import { HostlistenerDirective } from './hostlistener.directive';
import { HostbindingDirective } from './hostbinding.directive';
import { CclogoDirective } from './cclogo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SecondComponent,DatabindingComponent,VisitingcardComponent,EmpdetailsComponent,
    DefaultpipeComponent,BasichighlightDirective,RendererDirective,CclogoDirective,
    HostlistenerDirective,HostbindingDirective,FormsModule],
  templateUrl: './app.component.html',
   styleUrl: './app.component.css'
 
})
export class AppComponent {
  title = 'AshokIT';
  username:string="ASHOK IT";
  cardNumber:string="";

  userInput:User=new User;


  constructor(){
    this.userInput.username="Abhishek Kumar";
    this.userInput.salary="100000";
    this.userInput.title="Software Lead";
    this.userInput.department='2';
    this.userInput.address=[
      "Kukatpally",
      "Hyderabad"
    ];
    this.userInput.phones=[
      '111-1111-22222'
    ]
  }

}
