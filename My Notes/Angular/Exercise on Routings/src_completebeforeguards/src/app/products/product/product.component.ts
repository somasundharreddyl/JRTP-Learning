import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  product:any={};

  constructor(private prdService: ProductService,
    private actRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {

    const prodId= +this.actRoute.snapshot.params['id'];
    this.product = this.prdService.getProduct(prodId);


    this.actRoute.params.subscribe(
      (params:Params)=>{
        this.product = this.prdService.getProduct(+params['id']);

      }
    )
  }

  editProduct(){
    this.route.navigate(['\products',this.product.id,'edit'],{queryParamsHandling:"preserve"});
  }
}
