import { Customer } from './../transfer.model';
import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import { Transfer } from '../transfer.model';

@Component({
  selector: 'app-transfer-read',
  templateUrl: './transfer-read.component.html',
  styleUrls: ['./transfer-read.component.css']
})
export class TransferReadComponent implements OnInit {

  transfers: Transfer[];
  customer: Customer = {
    cpf: '',
    name: ''
  };

  displayedColumns = ['id', 'accountOrigin', 'accountTarget', 'amount', 'tax', 'scheduling'];

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.read().subscribe(t => {
      this.transfers = t['records'];
      this.customer = t['records'][0]['customer'];
    });
  }

}
