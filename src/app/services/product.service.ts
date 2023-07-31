import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Product from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = "http://localhost:8080/products/"

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.url)
  }

  getById(id: number){
    return this.httpClient.get(this.url + id)
  }

  delete(id: number){
    return this.httpClient.delete(this.url + id)
  }

  post(product: Product){
    return this.httpClient.post(this.url, product)
  }
 

}
