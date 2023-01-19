import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorstecnichalComponent } from './instructorstecnichal.component';

describe('InstructorstecnichalComponent', () => {
  let component: InstructorstecnichalComponent;
  let fixture: ComponentFixture<InstructorstecnichalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorstecnichalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorstecnichalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
