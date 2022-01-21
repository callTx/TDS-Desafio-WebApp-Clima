import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaAppComponent } from './clima-app.component';

describe('ClimaAppComponent', () => {
  let component: ClimaAppComponent;
  let fixture: ComponentFixture<ClimaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
