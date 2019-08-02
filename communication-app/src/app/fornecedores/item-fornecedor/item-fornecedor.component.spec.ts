import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFornecedorComponent } from './item-fornecedor.component';

describe('ItemFornecedorComponent', () => {
  let component: ItemFornecedorComponent;
  let fixture: ComponentFixture<ItemFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
