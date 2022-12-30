import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoProfesoresComponent } from './registo-profesores.component';

describe('RegistoProfesoresComponent', () => {
  let component: RegistoProfesoresComponent;
  let fixture: ComponentFixture<RegistoProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistoProfesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
