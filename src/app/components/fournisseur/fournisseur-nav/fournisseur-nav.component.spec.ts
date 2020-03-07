import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurNavComponent } from './fournisseur-nav.component';

describe('FournisseurNavComponent', () => {
  let component: FournisseurNavComponent;
  let fixture: ComponentFixture<FournisseurNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
