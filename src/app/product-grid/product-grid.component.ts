import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  dataSource: Product[];
  columnNames: string[] = ["id", "name", "quantity", "price", "min-price", "actions"];

  constructor(private productService: ProductService) { 
  }

  ngOnInit() {
    this.dataSource = this.productService.getProducts();
  }

  deleteItem(id: string){
    this.dataSource = this.dataSource.filter(f => f.Id !== id);
  }
}
