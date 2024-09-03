import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BueneasPracticasComponent } from './bueneas-practicas.component';

describe('BueneasPracticasComponent', () => {
  let component: BueneasPracticasComponent;
  let fixture: ComponentFixture<BueneasPracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BueneasPracticasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BueneasPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
