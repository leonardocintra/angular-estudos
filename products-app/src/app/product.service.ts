import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private nextId: number;
  private products: Product[] = [];
  
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();


  private dataFromServer: any[] = [
    { id: 1, name: 'Laptop i5', department_id: 4, price: 40, description: 'Core i5 muito legal' },
    { id: 2, name: 'Camisa Microsoft', department_id: 1, price: 30, description: '100% algodao' },
    { id: 3, name: 'Polo', department_id: 1, price: 32, description: 'Robinho esta usando' },
    { id: 4, name: 'Mouse i5', department_id: 3, price: 40, description: 'Mouse i5 muito legal' }
  ];

  constructor(private departmentService: DepartmentService) {
    for (let p of this.dataFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartimentById(p.id)
      });
      this.nextId = p.id++;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(p: Product) {
    let prod: Product = { id: this.nextId++, ...p};
    this.products.push(prod);
    console.log(this.products);
    this.onNewProduct.emit(prod);
  }

}
