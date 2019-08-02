import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = "111";
  name2: string = "222";


  cliente = {
    nome: "Leonardo",
    sobrenome: "Cintra",
    endereco: "Rua 6 de abril",
    idade: 29
  }

  constructor() { }

  ngOnInit() {
  }

}
