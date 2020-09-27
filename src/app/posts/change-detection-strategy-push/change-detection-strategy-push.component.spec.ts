import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategyPushComponent } from './change-detection-strategy-push.component';

describe('ChangeDetectionStrategyPushComponent', () => {
  let component: ChangeDetectionStrategyPushComponent;
  let fixture: ComponentFixture<ChangeDetectionStrategyPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionStrategyPushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionStrategyPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
