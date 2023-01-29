import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueContentComponent } from './queue-content.component';

describe('QueueContentComponent', () => {
  let component: QueueContentComponent;
  let fixture: ComponentFixture<QueueContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
