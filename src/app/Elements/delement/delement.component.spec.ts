import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelementComponent } from './delement.component';

describe('DelementComponent', () => {
  let component: DelementComponent;
  let fixture: ComponentFixture<DelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
