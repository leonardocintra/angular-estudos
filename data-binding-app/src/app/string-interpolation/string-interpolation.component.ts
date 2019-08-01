import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "Leonardo"
  person = {
    firstName: "Juliana",
    lastName: "Cintra",
    age: 29,
    address: "Route 50"
  }

  constructor() { }

  ngOnInit() {
  }

}
