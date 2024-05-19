import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {


   //server?: {id: number, name: string, status: string};
   product:any={};
   productName = '';
   productStatus = '';
   editCheck:boolean=false;
 
   constructor(private prdService: ProductService,  private actRoute:ActivatedRoute,
    private route:Router) { }
 
   ngOnInit() {
    const prodId= +this.actRoute.snapshot.params['id'];
    this.product = this.prdService.getProduct(prodId);
    this.actRoute.params.subscribe(
      (params:Params)=>{
        this.product = this.prdService.getProduct(+params['id']);

      }
  
      )

      this.actRoute.queryParams.subscribe(
        (qparams:Params)=>{

          this.editCheck=qparams['allowEdit']=='1'?true:false;

        }
    )

  
     this.productName = this.product.name;
     this.productStatus = this.product.status;
   }
 
   onUpdateProduct() {
     this.prdService.updateProduct(this.product.id, {name: this.productName, status: this.productStatus});
   }

}
