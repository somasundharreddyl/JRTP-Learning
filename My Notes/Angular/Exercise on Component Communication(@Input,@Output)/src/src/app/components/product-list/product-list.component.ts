import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input('all')
all?:number;
@Input('electronics')
electronics?:number;
@Input('fashion')
fashion?:number;
@Input('books')
books?:number


selectedButton:string="All";

@Output()
selectedButtonEvent:EventEmitter<string> = new EventEmitter<string>();

onChange(){
  this.selectedButtonEvent.emit(this.selectedButton);
}

}
