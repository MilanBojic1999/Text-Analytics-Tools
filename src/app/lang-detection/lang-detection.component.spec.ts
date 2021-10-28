import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangDetectionComponent } from './lang-detection.component';

describe('LangDetectionComponent', () => {
  let component: LangDetectionComponent;
  let fixture: ComponentFixture<LangDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
