import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESRComponent } from './esr.component';

describe('ESRComponent', () => {
  let component: ESRComponent;
  let fixture: ComponentFixture<ESRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
