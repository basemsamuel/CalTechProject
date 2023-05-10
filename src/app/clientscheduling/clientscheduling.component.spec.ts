import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientschedulingComponent } from './clientscheduling.component';

describe('ClientschedulingComponent', () => {
  let component: ClientschedulingComponent;
  let fixture: ComponentFixture<ClientschedulingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientschedulingComponent]
    });
    fixture = TestBed.createComponent(ClientschedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
