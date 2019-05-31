import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProcessListComponent } from './work-process-list.component';

describe('WorkProcessListComponent', () => {
  let component: WorkProcessListComponent;
  let fixture: ComponentFixture<WorkProcessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkProcessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
