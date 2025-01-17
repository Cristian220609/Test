import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtiesPageComponent } from './specialties-page.component';

describe('SpecialtiesPageComponent', () => {
  let component: SpecialtiesPageComponent;
  let fixture: ComponentFixture<SpecialtiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialtiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialtiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
