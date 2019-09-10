import { Injectable } from '@angular/core';
import { ConnectableObservable, Observable, Observer } from 'rxjs';
import { publish } from 'rxjs/operators';
import { DataModel } from './DataModel';

@Injectable({
  providedIn: 'root'
})
export class GenRandonDataService {
  public dataObservable: ConnectableObservable<DataModel>;

  constructor() {
    this.dataObservable = new Observable(
      (observer: Observer<DataModel>) => {
        let n: number = 0;
        console.log("Observable created");
        let f = () => {
          n++;
          console.log(n);
          if (n <= 10) {
            // aula 83
          }
        }
        f();
      }
    ).pipe(publish()) as ConnectableObservable<DataModel>;
  }
}
