import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {id: 1, name: 'Roupas'},
    {id: 2, name: 'Livros'},
    {id: 3, name: 'Eletronicos'},
    {id: 4, name: 'Computadores'},
  ];

  private nextId: number = 5;

  constructor() { }

  getDepartment(): Department[] {
    return this.departments;
  }

  addDepartment(d: Department) {
    this.departments.push({...d, id:this.nextId++});
    console.log(this.departments);
  }

  getDepartimentById(id: number): Department {
    return this.departments.find((d) => d.id === id);
  }
}
