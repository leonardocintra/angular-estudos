import { Component, OnInit } from '@angular/core';
import { Fornecedor } from './fornecedor.model';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  nome: string;
  idade: number;

  fornecedores: Fornecedor[] = [];

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.fornecedores.push(
      { nome: this.nome, idade: this.idade}
    );
    this.nome = "";
    this.idade = 0;
  }

  deleteFornecedor(index) {
    this.fornecedores.splice(index, 1);
  }

  updateFornecedor(fornecedor: Fornecedor, i) {
    this.fornecedores[i].nome = fornecedor.nome;
    this.fornecedores[i].idade = fornecedor.idade;
  }
}
