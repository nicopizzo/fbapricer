import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
    providedIn: 'root',
   })

export class ProductService { 
    constructor() { }
  
    getProducts() {
        let prods : Product[] = [];

        for(let p = 0; p < 10;p++){
            prods.push(this.generateProduct());
        }

        return prods;
    }

    private generateProduct(){
        var prod = new Product();
        prod.Id = Math.random().toString();
        prod.ProductNm = Math.random().toString();
        prod.Quantity = Math.random();
        prod.MinPrice = Math.random();
        prod.CurrentPrice = Math.random();
        return prod;
    }
  }