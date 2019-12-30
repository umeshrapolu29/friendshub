import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrienddetailsComponent } from './frienddetails.component';

describe('FrienddetailsComponent', () => {
  let component: FrienddetailsComponent;
  let fixture: ComponentFixture<FrienddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrienddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrienddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
