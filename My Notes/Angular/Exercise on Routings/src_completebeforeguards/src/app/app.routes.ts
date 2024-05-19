import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';

export const routes: Routes = [

{path:'',component:HomeComponent}, //http://localhost:4200 ==> It should Load Home Component

 //http://localhost:4200/users ==> It should Load Users Component
{path:'users',component:UsersComponent,
            children:[
                        {path:':id/:name',component:UserComponent}
                    ]
},
//http://localhost:4200/users/1/Ramu ==> Load the 1st user (: represent dynamic value)
//http://localhost:4200/users/2/Sita  ==> Load the 2nd User
{path:'products',component:ProductsComponent, //http://localhost:4200/products ==> It should Load products Component
   children:[
    {path:':id',component:ProductComponent}, //http://localhost:4200/product/1 ==> 1st product
    {path:':id/edit',component:EditproductComponent}, //http://localhost:4200/product/1/edit ==> 1st product

   ]
}

];
