import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Anunciar2Component } from './anunciar2.component';

describe('Anunciar2Component', () => {
  let component: Anunciar2Component;
  let fixture: ComponentFixture<Anunciar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Anunciar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Anunciar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
