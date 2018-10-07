import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReComComponent } from './test-re-com.component';

describe('TestReComComponent', () => {
  let component: TestReComComponent;
  let fixture: ComponentFixture<TestReComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
