import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content8Component } from './content8.component';

describe('Content8Component', () => {
  let component: Content8Component;
  let fixture: ComponentFixture<Content8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
