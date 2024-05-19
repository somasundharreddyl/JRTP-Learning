import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductComponent } from './product/product.component';
import {  Router,ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule,EditproductComponent,ProductComponent,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  public products: {id: number, name: string, status: string}[] = [];

  constructor(private prdService: ProductService,private route:Router,private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.products = this.prdService.getProducts();
  }

  loadProducts(){
    //{relativeTo:this.actRoute} ==> Current Path ==> localhost:4200/products / products 
   // this.route.navigate(['products'],{relativeTo:this.actRoute});

  //this.route.navigate(['products']);//Absolute Path
  this.route.navigate(['../products'],{relativeTo:this.actRoute});
  }



}
