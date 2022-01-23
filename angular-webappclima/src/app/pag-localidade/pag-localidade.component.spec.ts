import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLocalidadeComponent } from './pag-localidade.component';

describe('PagLocalidadeComponent', () => {
  let component: PagLocalidadeComponent;
  let fixture: ComponentFixture<PagLocalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagLocalidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagLocalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
