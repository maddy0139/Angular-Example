import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDepartmentsComponent } from './sub-departments.component';

describe('SubDepartmentsComponent', () => {
  let component: SubDepartmentsComponent;
  let fixture: ComponentFixture<SubDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
