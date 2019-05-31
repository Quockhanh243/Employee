import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourContactComponent } from './labour-contact.component';

describe('LabourContactComponent', () => {
  let component: LabourContactComponent;
  let fixture: ComponentFixture<LabourContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
