import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdModeComponent } from './prod-mode.component';

describe('ProdModeComponent', () => {
  let component: ProdModeComponent;
  let fixture: ComponentFixture<ProdModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
