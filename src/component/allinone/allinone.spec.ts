import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allinone } from './allinone';

describe('Allinone', () => {
  let component: Allinone;
  let fixture: ComponentFixture<Allinone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allinone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allinone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
