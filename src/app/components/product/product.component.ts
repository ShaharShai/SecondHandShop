import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent {
id: number = 0;
product: Product = new Product();


constructor(private activated: ActivatedRoute, private productService: ProductService, private router: Router){
  this.activated.params.subscribe(params => {
    this.id = params['id'];
   
    this.productService.getById(this.id).subscribe(data => {
      this.product = data as Product;
    })
  })
}

deleteProductHandler(product: Product){
  this.productService.delete(product.id).subscribe(data => {
     this.router.navigateByUrl('/')
  })
  }
}

