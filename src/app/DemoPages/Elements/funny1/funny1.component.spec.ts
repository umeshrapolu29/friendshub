import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Funny1Component } from './funny1.component';

describe('Funny1Component', () => {
  let component: Funny1Component;
  let fixture: ComponentFixture<Funny1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Funny1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Funny1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
