import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIssuesComponent } from './top-issues.component';

describe('TopIssuesComponent', () => {
  let component: TopIssuesComponent;
  let fixture: ComponentFixture<TopIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
