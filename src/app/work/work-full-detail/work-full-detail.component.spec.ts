import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFullDetailComponent } from './work-full-detail.component';

describe('WorkFullDetailComponent', () => {
  let component: WorkFullDetailComponent;
  let fixture: ComponentFixture<WorkFullDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkFullDetailComponent]
    });
    fixture = TestBed.createComponent(WorkFullDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
