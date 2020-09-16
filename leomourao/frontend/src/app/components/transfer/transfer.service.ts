import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMeta, Transfer } from './transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  readonly baseUrl = "http://localhost:8080/v1/scheduling/transfer";

  constructor(private http: HttpClient) { }

  read(): Observable<ResponseMeta[]> {
    return this.http.get<ResponseMeta[]>(`${this.baseUrl}/customer?cpf=21122233344`);
  }

  create(transfer: Transfer): Observable<ResponseMeta> {
    return this.http.post<ResponseMeta>(this.baseUrl, transfer);
  }
}
