import { Component } from '@angular/core';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: Product[] = [];
  currency: string = 'ILS';

  constructor(private productService: ProductService) {
    this.productService.get().subscribe((data) => {
      this.products = data as Product[];
    });
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.productService.delete(product.id).subscribe((data) => {
      return this.products.splice(index, 1);
    });
  }

  changeSelectHandler(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;

    switch (selectedValue) {
      case 'priceLowToHigh':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        this.products.sort((a, b) => b.price - a.price);
        break;
        case 'dateLowToHigh':
          this.products.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
          break;
        case 'dateHighToLow':
          this.products.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
          break;
      default:
        break;
    }
  }

  changeCurrencyHandler(event: Event){
    const selectedValue = (event.target as HTMLSelectElement).value;

    if(selectedValue == 'ILS'){
       this.currency = 'ILS';
       
    }
    else{
      this.currency = 'USD';
    }
  }
}
