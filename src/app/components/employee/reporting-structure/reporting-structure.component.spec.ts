import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingStructureComponent } from './reporting-structure.component';

describe('ReportingStructureComponent', () => {
  let component: ReportingStructureComponent;
  let fixture: ComponentFixture<ReportingStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
