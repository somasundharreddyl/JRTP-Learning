import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,ProductListComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
 export class ProductDetailsComponent {

   product:any[]=[];
   productCountArr:any;
   radioButtonValue:string='All';

   constructor(){
    this.product=[
      {productId:1,productName:"Samsung G10",price:25000,category:"Electronics",manufacturer:"Samsung",rating:3.5},
      {productId:2,productName:"Denim Jacket",price:2500,category:"Fashion",manufacturer:"Denim",rating:3.25},
      {productId:3,productName:"Reebok Shoes",price:2000,category:"Fashion",manufacturer:"Reebok",rating:4.5},
      {productId:4,productName:"LG TV",price:30000,category:"Electronics",manufacturer:"LG",rating:3.0},
      {productId:5,productName:"Boat R23",price:25000,category:"Electronics",manufacturer:"Boat",rating:3.5},
      {productId:6,productName:"The Little Prince",price:25000,category:"Books",manufacturer:"Amazon",rating:4.5},
      {productId:7,productName:"Redmi PowerBank",price:25000,category:"Electronics",manufacturer:"Redmi",rating:3.5},
      {productId:8,productName:"Rolex",price:25000,category:"Electronics",manufacturer:"Rolex",rating:3.5},
      {productId:9,productName:"IPhone 10",price:25000,category:"Electronics",manufacturer:"Apple",rating:4.0},
      {productId:10,productName:"T-Shirt",price:500,category:"Fashion",manufacturer:"Polo",rating:3.25},
      {productId:11,productName:"Casual Slippers",price:2000,category:"Fashion",manufacturer:"Paragon",rating:4.0},
      {productId:12,productName:"A.C",price:30000,category:"Electronics",manufacturer:"LG",rating:3.0},
      {productId:13,productName:"Truke",price:2500,category:"Electronics",manufacturer:"Truke",rating:3.5},
      {productId:14,productName:"Harry Potter",price:5000,category:"Books",manufacturer:"Amazon",rating:4.75},

    ]
   }

   update(){
    this.product=[
      {productId:1,productName:"Samsung G10",price:25000,category:"Electronics",manufacturer:"Samsung",rating:3.5},
      {productId:2,productName:"Denim Jacket",price:2500,category:"Fashion",manufacturer:"Denim",rating:3.25},
      {productId:3,productName:"Reebok Shoes",price:2000,category:"Fashion",manufacturer:"Reebok",rating:4.5},
      {productId:4,productName:"LG TV",price:30000,category:"Electronics",manufacturer:"LG",rating:3.0},
      {productId:5,productName:"Boat R23",price:25000,category:"Electronics",manufacturer:"Boat",rating:3.5},
      {productId:6,productName:"The Little Prince",price:200,category:"Books",manufacturer:"Amazon",rating:4.5},
      {productId:7,productName:"Redmi PowerBank",price:25000,category:"Electronics",manufacturer:"Redmi",rating:3.5},
      {productId:8,productName:"Rolex",price:25000,category:"Electronics",manufacturer:"Rolex",rating:3.5},
      {productId:9,productName:"IPhone 10",price:25000,category:"Electronics",manufacturer:"Apple",rating:4.0},
      {productId:10,productName:"T-Shirt",price:500,category:"Fashion",manufacturer:"Polo",rating:3.25},
      {productId:11,productName:"Casual Slippers",price:2000,category:"Fashion",manufacturer:"Paragon",rating:4.0},
      {productId:12,productName:"A.C",price:30000,category:"Electronics",manufacturer:"LG",rating:3.0},
      {productId:13,productName:"Truke",price:2500,category:"Electronics",manufacturer:"Truke",rating:3.5},
      {productId:14,productName:"Harry Potter",price:5000,category:"Books",manufacturer:"Amazon",rating:4.75},
      {productId:15,productName:"Realme",price:15000,category:"Electronics",manufacturer:"Realme",rating:3.5},
      {productId:16,productName:"Rain Coat",price:2000,category:"Fashion",manufacturer:"Broker",rating:3.0},
    ]
   }

   trackByProdId(index:number,product:any):number{
    return product.productId;
   }

   getAllProductsCount():number{
      return this.product.length;
   }

   getElectronicsCount():number{
    return this.product.filter(p=>p.category=='Electronics').length;
   }

   getFashionCount():number{
    return this.product.filter(p=>p.category=='Fashion').length;
   }

   getBooksCount():number{
    return this.product.filter(p=>p.category=='Books').length;
   }

   onChangeEvent(selectedRadioButtonvalue:string){
       console.log(selectedRadioButtonvalue);
       this.radioButtonValue=selectedRadioButtonvalue;
   }



  }
   
