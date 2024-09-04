import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovisionamientoComponent } from './aprovisionamiento.component';

describe('AprovisionamientoComponent', () => {
  let component: AprovisionamientoComponent;
  let fixture: ComponentFixture<AprovisionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprovisionamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovisionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
