import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  depName: string;

  constructor(private departmentSerivce: DepartmentService) { }

  ngOnInit() {
  }

  clear() {
    this.depName = "";
  }

  save() {
    this.departmentSerivce.addDepartment({
      name: this.depName
    });
    this.clear();
  }

}
