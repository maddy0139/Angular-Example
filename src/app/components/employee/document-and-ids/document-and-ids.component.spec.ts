import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAndIdsComponent } from './document-and-ids.component';

describe('DocumentAndIdsComponent', () => {
  let component: DocumentAndIdsComponent;
  let fixture: ComponentFixture<DocumentAndIdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentAndIdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentAndIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
