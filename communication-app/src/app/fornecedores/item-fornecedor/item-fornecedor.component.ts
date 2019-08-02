import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-item-fornecedor',
  templateUrl: './item-fornecedor.component.html',
  styleUrls: ['./item-fornecedor.component.css']
})
export class ItemFornecedorComponent implements OnInit {


  @Input() fornecedor: Fornecedor;
  @Output() updateFornecedor = new EventEmitter<Fornecedor>();
  @Output() removerFornecedor = new EventEmitter<any>();

  onEdit: boolean = false;
  nome: string;
  idade: number;

  constructor() { }

  ngOnInit() {
  }

  editar() {
    this.onEdit = true;
    this.nome = this.fornecedor.nome;
    this.idade = this.fornecedor.idade;
  }

  remover() {
    this.onEdit = false;
    this.removerFornecedor.emit();
  }

  salvar() {
    this.onEdit = false;
    this.updateFornecedor.emit(
      { nome: this.nome, idade: this.idade}
    )
  }

}
