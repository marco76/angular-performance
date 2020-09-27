import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategyParentComponent } from './change-detection-strategy-parent.component';

describe('ChangeDetectionStrategyParentComponent', () => {
  let component: ChangeDetectionStrategyParentComponent;
  let fixture: ComponentFixture<ChangeDetectionStrategyParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionStrategyParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionStrategyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
