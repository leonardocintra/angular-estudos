import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string = "primary";
  btnDisabled = true;

  colors = ['primary', 'accent', 'warn', 'info', '']
  indice = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.indice = (this.indice + 1) % this.colors.length 
    },400);
  }

}
