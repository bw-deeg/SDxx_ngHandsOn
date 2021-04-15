import { ProductService } from './../../services/product.service';

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = '';
  display = true;
  newProduct: Product = new Product();

  products : Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.index();
  }

  // add new product
  onSubmit(){
    // this.products.push(this.newProduct);
    this.productService.create(this.newProduct);
    this.newProduct = new Product();
    this.products = this.productService.index();
  }

  // getNumberOfProducts = function(){
  getNumberOfProducts (){
    return this.products.length;
  }

  log(msg:string):void{
    console.log(msg);
  }

  addProduct(product: Product): void{
  // deeg currently done in onSubmit()
  }

}
