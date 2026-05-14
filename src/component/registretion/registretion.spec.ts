import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registretion } from './registretion';

describe('Registretion', () => {
  let component: Registretion;
  let fixture: ComponentFixture<Registretion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registretion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registretion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
