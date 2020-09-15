import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMeta } from './transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  readonly baseUrl = "http://localhost:8080/v1/scheduling/transfer/customer?cpf=21122233344";

  constructor(private http: HttpClient) { }

  read(): Observable<ResponseMeta[]> {
    return this.http.get<ResponseMeta[]>(this.baseUrl);
  }
}
