import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  valueLeo: number = 0;
  title = "Meu titulo";

  constructor() { }

  ngOnInit() {
  }

  incrementarValor(event) {
    //this.valueLeo += n;
    this.valueLeo += event;
  }

}
