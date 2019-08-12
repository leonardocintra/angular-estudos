import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable) dataTable: MatTable<any>;


  products: Product[];
  prodColumns: string[] = ["id", "prodName", "department", "price", "description"];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.onNewProduct.subscribe((p) => {
      this.dataTable.renderRows();
    });
  }

}
