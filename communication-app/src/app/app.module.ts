import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { ClientComponent } from './input-binding/client/client.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { FormsModule } from '@angular/forms';
import { ItemFornecedorComponent } from './fornecedores/item-fornecedor/item-fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    FornecedoresComponent,
    ItemFornecedorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
