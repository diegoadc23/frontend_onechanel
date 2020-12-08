import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposEstatisticaComponent } from './tipos-estatistica.component';

describe('TiposEstatisticaComponent', () => {
  let component: TiposEstatisticaComponent;
  let fixture: ComponentFixture<TiposEstatisticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposEstatisticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposEstatisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
