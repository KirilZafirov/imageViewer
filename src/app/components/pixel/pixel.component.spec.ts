/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PixelComponent } from './pixel.component';

describe('PixelComponent', () => {
  let component: PixelComponent;
  let fixture: ComponentFixture<PixelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
