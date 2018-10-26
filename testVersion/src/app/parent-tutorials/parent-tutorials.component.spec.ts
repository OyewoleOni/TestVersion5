import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTutorialsComponent } from './parent-tutorials.component';

describe('ParentTutorialsComponent', () => {
  let component: ParentTutorialsComponent;
  let fixture: ComponentFixture<ParentTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
