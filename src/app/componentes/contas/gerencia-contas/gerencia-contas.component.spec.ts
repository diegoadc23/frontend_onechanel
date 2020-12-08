import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaContasComponent } from './gerencia-contas.component';

describe('GerenciaContasComponent', () => {
  let component: GerenciaContasComponent;
  let fixture: ComponentFixture<GerenciaContasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciaContasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciaContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
