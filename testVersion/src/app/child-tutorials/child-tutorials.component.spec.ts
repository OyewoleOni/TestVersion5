import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTutorialsComponent } from './child-tutorials.component';

describe('ChildTutorialsComponent', () => {
  let component: ChildTutorialsComponent;
  let fixture: ComponentFixture<ChildTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
