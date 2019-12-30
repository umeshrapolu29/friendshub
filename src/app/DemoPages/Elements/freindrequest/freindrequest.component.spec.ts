import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreindrequestComponent } from './freindrequest.component';

describe('FreindrequestComponent', () => {
  let component: FreindrequestComponent;
  let fixture: ComponentFixture<FreindrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreindrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreindrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
