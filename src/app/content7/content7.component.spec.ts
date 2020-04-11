import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content7Component } from './content7.component';

describe('Content7Component', () => {
  let component: Content7Component;
  let fixture: ComponentFixture<Content7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
