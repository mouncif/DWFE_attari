import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitNavComponent } from './produit-nav.component';

describe('ProduitNavComponent', () => {
  let component: ProduitNavComponent;
  let fixture: ComponentFixture<ProduitNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
