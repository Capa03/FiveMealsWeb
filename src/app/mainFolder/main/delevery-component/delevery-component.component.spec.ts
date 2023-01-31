import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleveryComponentComponent } from './delevery-component.component';

describe('DeleveryComponentComponent', () => {
  let component: DeleveryComponentComponent;
  let fixture: ComponentFixture<DeleveryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleveryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleveryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
