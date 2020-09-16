import { TransferCreateComponent } from './components/transfer/transfer-create/transfer-create.component';
import { TransferCrudComponent } from './views/transfer-crud/transfer-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "transfer",
    component: TransferCrudComponent
  },
  {
    path: "transfer/create",
    component: TransferCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
