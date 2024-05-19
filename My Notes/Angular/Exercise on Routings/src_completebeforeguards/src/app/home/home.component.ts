import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private route:Router){}

  loadProducts(){
    this.route.navigate(['/products']);

  }


  loadUsers(){
    this.route.navigate(['/users']);
  }
}
