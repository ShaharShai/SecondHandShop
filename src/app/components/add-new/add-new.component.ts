import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { now } from 'mongoose';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})

export class AddNewComponent {

newProduct: Product ={
id: 0,
name: '',
description: '',
price: +'',
city: '',
phone: '',
publishDate: new Date(Date.now()),
image: ''
}

constructor(private productService: ProductService, private router: Router) {

}

addNewProductHandler(){
  this.productService.post(this.newProduct).subscribe(data => {
    this.router.navigateByUrl('/');
  })
}

}
