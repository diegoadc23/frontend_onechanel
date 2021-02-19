import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDeletarComponent } from './detalhes-deletar.component';

describe('DetalhesDeletarComponent', () => {
  let component: DetalhesDeletarComponent;
  let fixture: ComponentFixture<DetalhesDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
