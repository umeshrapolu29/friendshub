import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationcontrolComponent } from './applicationcontrol.component';

describe('ApplicationcontrolComponent', () => {
  let component: ApplicationcontrolComponent;
  let fixture: ComponentFixture<ApplicationcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
