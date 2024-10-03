import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosFormComponent } from './medicamentos-form.component';

describe('MedicamentosFormComponent', () => {
  let component: MedicamentosFormComponent;
  let fixture: ComponentFixture<MedicamentosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicamentosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
