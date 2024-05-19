import { Component } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //user?: {id: number, name: string};
  user:any={};


  

  constructor(private actRoute:ActivatedRoute) { }
//Activatedroute ==> Current Path ==> http://localhost:4200/users/1/Ramu
//IN route.ts ===> Defniition ==> http://localhost:4200/users/:id/:name
  ngOnInit() {


    this.user={
      id:this.actRoute.snapshot.params['id'],   //1
      name:this.actRoute.snapshot.params['name'] //Ramu
    }

//When there is change the routing path ==> Angualr by default will not take changes we need to subscribe
    this.actRoute.params.subscribe(
        (params:Params)=>{
          this.user.id=params['id'],
          this.user.name=params['name']
        }
    )
  }
}
