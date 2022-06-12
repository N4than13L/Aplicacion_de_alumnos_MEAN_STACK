import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstripcionesComponent } from './instripciones.component';

describe('InstripcionesComponent', () => {
  let component: InstripcionesComponent;
  let fixture: ComponentFixture<InstripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
